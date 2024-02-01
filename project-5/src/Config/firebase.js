// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk1WpEqWZj1ISpK6Kr7GrKAcPYAYItzFU",
  authDomain: "vite-contact-97192.firebaseapp.com",
  projectId: "vite-contact-97192",
  storageBucket: "vite-contact-97192.appspot.com",
  messagingSenderId: "153765794828",
  appId: "1:153765794828:web:d3b0b40aa3391a7a7a8a29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)