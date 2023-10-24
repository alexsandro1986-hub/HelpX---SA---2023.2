import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBhtq9mLbm9zv5TnWeg7d3izLDzm3pjBLo",
    authDomain: "chat-a90a8.firebaseapp.com",
    projectId: "chat-a90a8",
    storageBucket: "chat-a90a8.appspot.com",
    messagingSenderId: "798181939811",
    appId: "1:798181939811:web:91d2dad2ebe4bd8a27f656"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const database = getFirestore(app);
