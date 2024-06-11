import { db } from "../firebase";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInAnonymously,
  } from "firebase/auth";
  import { addDoc, collection, onSnapshot, query, where, updateDoc, doc, arrayUnion } from "firebase/firestore";
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
export const createPokerGame = (data) => {
  addDoc(collection(db, ROOT_PATH), data);
};

// Watches the games for any changes, returns only the docs that the current user is the owner of.
// Takes in the current user ID and a callback.
export const subGames = (userID, callback) => {
  return onSnapshot(query(collection(db, ROOT_PATH), where("owner", "==", userID)), callback);
}

// Updates the gameStarted value to true, returns nothing, takes in the document ID.
export const startGame = (docID) => {
  updateDoc(doc(db, ROOT_PATH, docID), { isLookingForPlayers: true });
}

// Watches for changes in games looking for players, returns only games looking for players, takes in a callback.
export const subGamesToJoin = (callback) => {
  return onSnapshot(query(collection(db, ROOT_PATH), where("isLookingForPlayers", "==", true)), callback);
}

// Adds current player to a game, returns nothing, takes in document ID, current userID, and the data to set on the document.
export const addPlayer = (docID, userID) => {
  updateDoc(doc(db, ROOT_PATH, docID), {players: arrayUnion(userID)});
}

export const subPlayerCount = (docID) => {
  onSnapshot(collection(db, `${ROOT_PATH}/${docID}`))
}