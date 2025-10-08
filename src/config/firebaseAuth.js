// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {  getAuth , GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnJDB9YGtuolKK1Z8LarC7rHU8T7_wzXE",
  authDomain: "swiggy-project-c.firebaseapp.com",
  projectId: "swiggy-project-c",
  storageBucket: "swiggy-project-c.firebasestorage.app",
  messagingSenderId: "899423121367",
  appId: "1:899423121367:web:92e3108f081a2048982592",
  measurementId: "G-5VE8ZGKKQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {  auth, provider };