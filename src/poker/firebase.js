import { db } from "../firebase";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInAnonymously,
  } from "firebase/auth";
  import { addDoc, collection } from "firebase/firestore";

  // Logs user in as anon, returns nothing.
  export const anonSignIn = () => {
    signInAnonymously(getAuth());
  };

  // Logs out the user, returns nothing.
  export const userLogout = () => {
    signOut(getAuth());
  }

  export const authStateChecker = (callback) => {
    onAuthStateChanged(getAuth(), callback);
  };

  // Here data is setting the game name as a field only, returns nothing.
  export const createPokerGame = async (userID, data) => {
    await addDoc(collection(db, `game/`), data);
  };