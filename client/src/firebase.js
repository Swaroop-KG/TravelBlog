// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-657c1.firebaseapp.com",
  projectId: "mern-blog-657c1",
  storageBucket: "mern-blog-657c1.appspot.com",
  messagingSenderId: "392098748112",
  appId: "1:392098748112:web:9c334c5de501eb103f70d5"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);