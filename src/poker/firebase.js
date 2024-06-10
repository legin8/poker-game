import { db } from "../firebase";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInAnonymously,
  } from "firebase/auth";
  import { addDoc, collection, onSnapshot, query, where, updateDoc, doc } from "firebase/firestore";
  import { ROOT_PATH } from "../utils/constants";

// Logs user in as anon, returns nothing.
export const anonSignIn = () => {
  signInAnonymously(getAuth());
};

// Logs out the user, returns nothing, takes in nothing.
export const userLogout = () => {
  signOut(getAuth());
}

// Checks to see if the user is logged in, returns nothing, takes in a callback.
export const authStateChecker = (callback) => {
  onAuthStateChanged(getAuth(), callback);
};

// Here data is setting the game name as a field only, returns nothing, takes in the data to add to the db.
export const createPokerGame = async (data) => {
  await addDoc(collection(db, ROOT_PATH), data);
};

// Watches the games for any changes, returns only the docs that the current user is the owner of.
// Takes in the current user ID and a callback.
export const subGames = async (userID, callback) => {
  return onSnapshot(query(collection(db, ROOT_PATH), where("owner", "==", userID)), callback);
}

// Updates the gameStarted value to true, returns nothing, takes in the document ID.
export const startGame = async (docID) => {
  updateDoc(doc(db, "games", docID), { isLookingForPlayers: true });
}

export const subGamesToJoin = async (callback) => {
  return onSnapshot(query(collection(db, ROOT_PATH), where("isLookingForPlayers", "==", true)), callback);
}