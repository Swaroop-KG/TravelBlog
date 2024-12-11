// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "photo-blog-792b3.firebaseapp.com",
  projectId: "photo-blog-792b3",
  storageBucket: "photo-blog-792b3.firebasestorage.app",
  messagingSenderId: "533100528365",
  appId: "1:533100528365:web:9f7993ef3ac58c3271c2e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);