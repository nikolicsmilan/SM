// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTCuT4rmLMOehoSq8wWcIEVevG6PkEKYQ",
  authDomain: "sm-new-8a9a7.firebaseapp.com",
  projectId: "sm-new-8a9a7",
  storageBucket: "sm-new-8a9a7.appspot.com",
  messagingSenderId: "776594625086",
  appId: "1:776594625086:web:5418458a18a496b048376f",
  measurementId: "G-Z341JLW4M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage =getStorage(app)