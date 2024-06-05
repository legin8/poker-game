import { db } from "../firebase";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInAnonymously,
  } from "firebase/auth";

  export const anonSignInAccount = () => {
    signInAnonymously(getAuth());
  };

  export const userLogout = () => {
    signOut(getAuth());
  }

  export const authStateChecker = (callback) => {
    onAuthStateChanged(getAuth(), callback);
  };