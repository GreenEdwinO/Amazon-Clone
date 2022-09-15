import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxBNaDT4dEc4Be1yvNcoSc8EBZexG_kfQ",
  authDomain: "challenge-d5898.firebaseapp.com",
  projectId: "challenge-d5898",
  storageBucket: "challenge-d5898.appspot.com",
  messagingSenderId: "769032048730",
  appId: "1:769032048730:web:29c0073dc57a113a370863",
  measurementId: "G-1VCET5FE4P"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };