// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnjdu9vtlAdI8NU-DifXq6LwvLDx9aTjA",
  authDomain: "auth-inte.firebaseapp.com",
  projectId: "auth-inte",
  storageBucket: "auth-inte.firebasestorage.app",
  messagingSenderId: "738542057418",
  appId: "1:738542057418:web:8918876b57faeb8b5fc133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;