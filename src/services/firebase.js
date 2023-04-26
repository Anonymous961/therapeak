import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA55DUP6zRYZdElb5SHb0lJZhXzv_W-QVw",
  authDomain: "therapeak-9c8a4.firebaseapp.com",
  projectId: "therapeak-9c8a4",
  storageBucket: "therapeak-9c8a4.appspot.com",
  messagingSenderId: "390472427452",
  appId: "1:390472427452:web:781c0ea29d6d1ae591edb9"
};

// init firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
