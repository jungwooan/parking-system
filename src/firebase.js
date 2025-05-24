// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvISFYTUASXOKuV2UhwtB4Ee-BB2LRlco",
  authDomain: "lig-sump-parking.firebaseapp.com",
  projectId: "lig-sump-parking",
  storageBucket: "lig-sump-parking.firebasestorage.app",
  messagingSenderId: "975400144459",
  appId: "1:975400144459:web:88cb343138b1645626c7ce",
  measurementId: "G-HDJRVXB4YP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
