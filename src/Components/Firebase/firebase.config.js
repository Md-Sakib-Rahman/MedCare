// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTMa-7ciPEBPCJ8ZPg5__LWwtBzYVxxVU",
  authDomain: "medcareauth-150bb.firebaseapp.com",
  projectId: "medcareauth-150bb",
  storageBucket: "medcareauth-150bb.firebasestorage.app",
  messagingSenderId: "94790140998",
  appId: "1:94790140998:web:d8826f0275a7831383b647",
  measurementId: "G-7VY9LC82CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
