import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYg9D7lfQ2WgEWcsffhMSmKDzbnqwxZXo",
  authDomain: "quiz-4a3d4.firebaseapp.com",
  projectId: "quiz-4a3d4",
  storageBucket: "quiz-4a3d4.appspot.com",
  messagingSenderId: "400995198978",
  appId: "1:400995198978:web:786735424e7d359837df1b",
  measurementId: "G-H4H6Q61VTM",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
