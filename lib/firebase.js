// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf3NPhRB-SOSqfC1OiQzcxdXMKYBv_OOc",
  authDomain: "wise-52911.firebaseapp.com",
  projectId: "wise-52911",
  storageBucket: "wise-52911.firebasestorage.app",
  messagingSenderId: "1039011583011",
  appId: "1:1039011583011:web:f527956424974f1917cd96",
  measurementId: "G-809NFXBGVD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
