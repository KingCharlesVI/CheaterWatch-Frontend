// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAcApdDlXY__lQWtsKr12Bi7mxbdiEtRFY",
  authDomain: "cheaterwatch-a9ff2.firebaseapp.com",
  projectId: "cheaterwatch-a9ff2",
  storageBucket: "cheaterwatch-a9ff2.appspot.com",
  messagingSenderId: "597904687433",
  appId: "1:597904687433:web:753dafab6f8cdcc8ea9a98"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };