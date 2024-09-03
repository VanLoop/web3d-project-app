// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmJ5lOO6fP-b0jkISkgpZ7BOzU2K8B64g",
  authDomain: "terraquest-3bd90.firebaseapp.com",
  projectId: "terraquest-3bd90",
  storageBucket: "terraquest-3bd90.appspot.com",
  messagingSenderId: "529387753407",
  appId: "1:529387753407:web:6b2fbc3f4e92383e369b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase Firestore and get a reference to the service
export const db = getFirestore(app);