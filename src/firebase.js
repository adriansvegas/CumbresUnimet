import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9S4hjjA3lzyxTLTiYZgFXi0b268rDxbc",
  authDomain: "cumbresunimet.firebaseapp.com",
  projectId: "cumbresunimet",
  storageBucket: "cumbresunimet.appspot.com", // Corrige el storageBucket
  messagingSenderId: "828160357973",
  appId: "1:828160357973:web:129849366b7ce1ac2286dc",
  measurementId: "G-Z1VD9YRCLT"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Inicializa la autenticación
const auth = getAuth(app);

// Proveedores de autenticación
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Exporta los objetos necesarios
export { auth, googleProvider, facebookProvider };

// Inicializa Google Analytics
const analytics = getAnalytics(app);
