// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHDjjrqvaNDtmUKiSoeIrdilQa_056Q2A",
  authDomain: "event-1868d.firebaseapp.com",
  projectId: "event-1868d",
  storageBucket: "event-1868d.appspot.com",
  messagingSenderId: "587940740524",
  appId: "1:587940740524:web:3e2df13689ed0b55a78e09",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
