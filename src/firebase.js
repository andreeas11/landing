import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpXwfgblYVg1kRjUCnEfwKSWWUozCcWPA",
  authDomain: "ias-se.firebaseapp.com",
  projectId: "ias-se",
  storageBucket: "ias-se.firebasestorage.app",
  messagingSenderId: "79363727320",
  appId: "1:79363727320:web:20ce03152cfeca79d95cad",
  measurementId: "G-STR225V4HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);