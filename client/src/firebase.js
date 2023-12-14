// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "namaste-estate.firebaseapp.com",
  projectId: "namaste-estate",
  storageBucket: "namaste-estate.appspot.com",
  messagingSenderId: "602831104751",
  appId: "1:602831104751:web:bd2fb01f92fc73a2f3491a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
