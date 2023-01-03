// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkgMcEAgv8oBoMmU3dOaTzFRzQV00cbH8",
  authDomain: "login-register-firebase-fa358.firebaseapp.com",
  projectId: "login-register-firebase-fa358",
  storageBucket: "login-register-firebase-fa358.appspot.com",
  messagingSenderId: "593231725130",
  appId: "1:593231725130:web:733d248715a8811ddd1cb3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
