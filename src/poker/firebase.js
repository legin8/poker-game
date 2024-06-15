import { db } from "../firebase";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInAnonymously,
  } from "firebase/auth";
  import { addDoc, collection, onSnapshot, query, where, updateDoc, doc, arrayUnion } from "firebase/firestore";
  import { ROOT_PATH, STATE_OF_PLAY } from "../utils/constants";

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

// Watches for changes in games looking for players, returns only games looking for players, takes in a callback.
export const subGamesToJoin = (callback) => {
  return onSnapshot(query(collection(db, ROOT_PATH), where("isLookingForPlayers", "==", true)), callback);
}

// Adds current player to a game, returns nothing, takes in document ID, current userID.
export const addPlayer = (docID, userID) => {
  updateDoc(doc(db, ROOT_PATH, docID), {players: arrayUnion(userID)});
}

// Watches for changes to a specific document in the root, returns only the one doc, it takes the current doc ID and a callback.
export const subPlayerCount = (docID, callback) => {
  return onSnapshot(doc(db, ROOT_PATH, docID), callback);
}

// Updates the isLookingForPlayers field, retuns nothing, takes the document ID and the value you want isLookingForPlayers to be.
export const setIsLookingForPlayers = (docID, isLooking) => {
  updateDoc(doc(db, ROOT_PATH, docID), {isLookingForPlayers: isLooking});
}


export const setTurn = (docID, index) => {
  updateDoc(doc(db, ROOT_PATH, docID), {turn: index});
}

export const setPhase = (docID) => {
  updateDoc(doc(db, ROOT_PATH, docID), {phase: STATE_OF_PLAY.drawCards});
}

export const subPlayingGame = (docID, callback) => {
  return onSnapshot(doc(db, ROOT_PATH, docID), callback);
}