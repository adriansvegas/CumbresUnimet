import React, { useEffect, useState } from 'react';
import { auth, googleProvider, facebookProvider } from './firebase'; 

import { signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

const Auth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

const handleLogin = async (provider) => {
    console.log('Provider being used for login:', provider);
    console.log('Auth object:', auth);
    console.log('Google Provider:', googleProvider);


    setLoading(true);
    try {
      if (provider) {
      await signInWithPopup(provider);

      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      history.push('/home'); 
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

const handleRegister = async (email, password) => {

    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      history.push('/home');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      history.push('/login');
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {user ? (
          <div>
            <h2 className="text-2xl font-bold text-center mb-4">Bienvenido, {user.displayName}</h2>
            <button 
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-200"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-center mb-4">Iniciar Sesión</h1>
            {error && <p className="text-red-500">{error}</p>}
            <input 
              type="email" 
              placeholder="Email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <input 
              type="password" 
              placeholder="Contraseña" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <button 
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => handleLogin(null) || handleRegister(email, password)}

            >
              Iniciar con Email
            </button>
            <button 
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 mt-2"
              onClick={() => handleLogin(googleProvider)}
            >
              Iniciar con Google
            </button>
            <button 
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200 mt-2"
              onClick={handleRegister}
            >
              Registrarse
            </button>
            {loading && <p className="text-gray-500">Cargando...</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;
