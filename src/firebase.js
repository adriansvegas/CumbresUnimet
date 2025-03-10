import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


export { auth, googleProvider, facebookProvider };
const analytics = getAnalytics(app);