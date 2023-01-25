// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkUdyAYIC0fSQfAAGyi71YBmcKn7_nJiQ",
  authDomain: "email-password-authorize.firebaseapp.com",
  projectId: "email-password-authorize",
  storageBucket: "email-password-authorize.appspot.com",
  messagingSenderId: "935408906091",
  appId: "1:935408906091:web:b24d8cf162a92b1bd8262e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;