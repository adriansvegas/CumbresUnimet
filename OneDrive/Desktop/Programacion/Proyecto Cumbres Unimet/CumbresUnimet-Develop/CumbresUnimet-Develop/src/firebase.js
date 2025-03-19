
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";


// Load environment variables from a .env file
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9S4hjjA3lzyxTLTiYZgFXi0b268rDxbc",
  authDomain: "cumbresunimet.firebaseapp.com",
  projectId: "cumbresunimet",
  storageBucket: "cumbresunimet.firebasestorage.app",
  messagingSenderId:"828160357973",
  appId: "1:828160357973:web:129849366b7ce1ac2286dc",
  measurementId: "G-Z1VD9YRCLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export default getFirestore(app);


