// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDm6O34tsUPg_kHEsMQYwVyM6Rf0np7sko",
  authDomain: "hero-gadget-with-auth.firebaseapp.com",
  projectId: "hero-gadget-with-auth",
  storageBucket: "hero-gadget-with-auth.appspot.com",
  messagingSenderId: "853047151092",
  appId: "1:853047151092:web:bce848360546d9584611a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;