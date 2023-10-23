// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjB7hp6cr-XRd4FaBUf3whkXTCSqCnCR0",
  authDomain: "netflix-gpt-515b5.firebaseapp.com",
  projectId: "netflix-gpt-515b5",
  storageBucket: "netflix-gpt-515b5.appspot.com",
  messagingSenderId: "122123842668",
  appId: "1:122123842668:web:cf9478a65c554938e69449",
  measurementId: "G-BTP9J56RGQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
