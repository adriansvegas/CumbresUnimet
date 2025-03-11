import React, { useEffect, useState } from 'react';
import { auth, googleProvider } from './firebase'; 
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { useHistory } from 'react-router-dom';

const Auth = () => {
  const [user, setUser ] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser (user);
      } else {
        setUser (null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (provider) => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
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
            <button 
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
              onClick={() => handleLogin(googleProvider)}
            >
              Iniciar con Google
            </button>
            {loading && <p className="text-gray-500">Cargando...</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;