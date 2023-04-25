import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDP-MjTS4e9KuUHIBCbC35uOHZAY5at3KY",
  authDomain: "therapeak-90f0f.firebaseapp.com",
  projectId: "therapeak-90f0f",
  storageBucket: "therapeak-90f0f.appspot.com",
  messagingSenderId: "181512940143",
  appId: "1:181512940143:web:6ade18e680599f7718bb9a",
};

// init firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
