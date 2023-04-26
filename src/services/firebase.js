import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACO5JYGjIcH70qPGjFit25kIIbe5Waw5Q",
  authDomain: "therapeak-7fb59.firebaseapp.com",
  projectId: "therapeak-7fb59",
  storageBucket: "therapeak-7fb59.appspot.com",
  messagingSenderId: "188853442891",
  appId: "1:188853442891:web:e91d03959f0b536f7c30ce"
};

// init firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
