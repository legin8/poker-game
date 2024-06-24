// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  initializeFirestore,
  persistentLocalCache,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASMWFzjzFl5mIT9uD2waiahBzU8bBSI7Y",
  authDomain: "nem-poker-app.firebaseapp.com",
  projectId: "nem-poker-app",
  storageBucket: "nem-poker-app.appspot.com",
  messagingSenderId: "609691316729",
  appId: "1:609691316729:web:559094f8cd516639730d28",
  measurementId: "G-1MDGGRTWTW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeFirestore(app, { localCache: persistentLocalCache({}) });
export const db = getFirestore(app);
