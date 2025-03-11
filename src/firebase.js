import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';

//Configuracion
const firebaseConfig = {
  apiKey: "AIzaSyC9S4hjjA3lzyxTLTiYZgFXi0b268rDxbc",
  authDomain: "cumbresunimet.firebaseapp.com",
  projectId: "cumbresunimet",
  storageBucket: "cumbresunimet.firebasestorage.app",
  messagingSenderId: "828160357973",
  appId: "1:828160357973:web:129849366b7ce1ac2286dc",
  measurementId: "G-Z1VD9YRCLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();


export {auth, googleProvider, facebookProvider};
const analytics = getAnalytics(app);
//** 
/*
=======
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC9S4hjjA3lzyxTLTiYZgFXi0b268rDxbc",
  authDomain: "cumbresunimet.firebaseapp.com",
  projectId: "cumbresunimet",
  storageBucket: "cumbresunimet.firebasestorage.app",
  messagingSenderId: "828160357973",
  appId: "1:828160357973:web:129849366b7ce1ac2286dc",
  measurementId: "G-Z1VD9YRCLT"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const facebookProvider = new FacebookAuthProvider();


export { auth, googleProvider, facebookProvider };
const analytics = getAnalytics(app);
>>>>>>> 3f71067f682c3f891895781932f0b2bb3953b093
*/