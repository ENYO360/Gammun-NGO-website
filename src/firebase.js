// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBa5yH3TNJiF0NomcY_i_vzMUXKlZn7J_w",
  authDomain: "gammun-website.firebaseapp.com",
  projectId: "gammun-website",
  storageBucket: "gammun-website.firebasestorage.app",
  messagingSenderId: "252940145789",
  appId: "1:252940145789:web:264115a71980bcfeadcd14",
  measurementId: "G-5Y9SLX9LEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);