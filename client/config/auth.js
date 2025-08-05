// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD75sZ1_nqSQWKcenIJ0Y5XM46JcqO2RFM",
  authDomain: "fern-phase2-livecode2.firebaseapp.com",
  projectId: "fern-phase2-livecode2",
  storageBucket: "fern-phase2-livecode2.firebasestorage.app",
  messagingSenderId: "76600895666",
  appId: "1:76600895666:web:8b49370a684cfd05ac01ab",
  measurementId: "G-L0ENSE84JL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);