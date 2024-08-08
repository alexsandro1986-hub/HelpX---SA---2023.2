import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9OonG-mkmHlF0lr0bh_rleKmSpEcrj-s",
  authDomain: "chatapp-52d94.firebaseapp.com",
  projectId: "chatapp-52d94",
  storageBucket: "chatapp-52d94.appspot.com",
  messagingSenderId: "980408889967",
  appId: "1:980408889967:web:0d9fe00214d77d249dd39a"
};
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const database = getFirestore(app);
