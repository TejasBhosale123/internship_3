// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2uH-ezROX5ga-dlBdQQQmC1PzSfUw594",
  authDomain: "internship-authentication.firebaseapp.com",
  projectId: "internship-authentication",
  storageBucket: "internship-authentication.firebasestorage.app",
  messagingSenderId: "792453311318",
  appId: "1:792453311318:web:3f95c11cafcf4c30d044f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app