import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { addDoc, collection, getDocs, query,where, doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC_jusoE8_dzr1trHhyXw-sygzn-WVA_fc",
  authDomain: "login-30d82.firebaseapp.com",
  projectId: "login-30d82",
  storageBucket: "login-30d82.firebasestorage.app",
  messagingSenderId: "761541120019",
  appId: "1:761541120019:web:fdc1ac9ae9e3629e2d2fe6",
  measurementId: "G-G7TDE2V1V2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);
const db = getFirestore (app);

export{ auth, db, collection, addDoc, getDocs, query, where, doc, setDoc};