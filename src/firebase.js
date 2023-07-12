import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSgHgfYmZs6hbxO39uFatH8rZwU53oXUo",

  authDomain: "buyandsell-f6a0b.firebaseapp.com",

  projectId: "buyandsell-f6a0b",

  storageBucket: "buyandsell-f6a0b.appspot.com",

  messagingSenderId: "204634948735",

  appId: "1:204634948735:web:0d5a3cfc51c50d2bef2b4a",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default {
  firebase,
};
