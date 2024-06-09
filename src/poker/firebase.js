import { db } from "../firebase";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInAnonymously,
  } from "firebase/auth";
  import { addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";
  import { ROOT_PATH } from "../utils/constants";

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
export const createPokerGame = async (data) => {
  await addDoc(collection(db, ROOT_PATH), data);
};

// Gets all the games, retuns array of unfiltered data.
export const getPokerGames = async () => {
  return await getDocs(collection(db, ROOT_PATH));
}

export const subGames = async (callback) => {
  return onSnapshot(collection(db, ROOT_PATH), callback);
}