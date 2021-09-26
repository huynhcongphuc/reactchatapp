import firebase from 'firebase/compat/app';

import 'firebase/compat/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjYoxW2-rAOwEtcGP1ru2y3oh3kZJuNdk",
  authDomain: "appchat-7389e.firebaseapp.com",
  databaseURL: "https://appchat-7389e-default-rtdb.firebaseio.com",
  projectId: "appchat-7389e",
  storageBucket: "appchat-7389e.appspot.com",
  messagingSenderId: "273131608700",
  appId: "1:273131608700:web:de874eadf4cbebdc1d87f9",
  measurementId: "G-ZCXBJ5YMY3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
