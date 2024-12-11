// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "photo-blog-6756b.firebaseapp.com",
  projectId: "photo-blog-6756b",
  storageBucket: "photo-blog-6756b.firebasestorage.app",
  messagingSenderId: "402148214318",
  appId: "1:402148214318:web:693724b5fb43ea834a41bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);