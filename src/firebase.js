import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAdMGFA8lRRf9TB2iw-91kHFvfVZjjt-4E",
    authDomain: "chat-e0eb9.firebaseapp.com",
    projectId: "chat-e0eb9",
    storageBucket: "chat-e0eb9.appspot.com",
    messagingSenderId: "364904832983",
    appId: "1:364904832983:web:3372cbee92d4a04e8b3592"
  };


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();