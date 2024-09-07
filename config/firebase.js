import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyByPFq1LS4O-2LcFW1yjFmkPu1-bRwtoNQ",
    authDomain: "quiz-expo-d7634.firebaseapp.com",
    projectId: "quiz-expo-d7634",
    storageBucket: "quiz-expo-d7634.appspot.com",
    messagingSenderId: "666735211286",
    appId: "1:666735211286:web:3bb2623d1cb70614895637",
    measurementId: "G-8QNWGW9XZT"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
