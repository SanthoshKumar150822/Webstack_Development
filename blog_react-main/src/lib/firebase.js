// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { apiKey } from "../../keys";
// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAgFtRjf5FV0xk_mBSdTWwv49bJhwbe-PQ",
    authDomain: "blogging-app-react-d7c24.firebaseapp.com",
    projectId: "blogging-app-react-d7c24",
    storageBucket: "blogging-app-react-d7c24.appspot.com",
    messagingSenderId: "743296146438",
    appId: "1:743296146438:web:363f386989ed4ee5f33787",
    measurementId: "G-YDP09LF6LN"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app)