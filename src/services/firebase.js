import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDe8B4gDwmWr1I-ZEDfPpHnKsA2Ha8KLKw",
  authDomain: "therapeak.firebaseapp.com",
  projectId: "therapeak",
  storageBucket: "therapeak.appspot.com",
  messagingSenderId: "298837084919",
  appId: "1:298837084919:web:2caad69ecde5ae80aba1f2"
};

// init firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {app,auth,db,storage};