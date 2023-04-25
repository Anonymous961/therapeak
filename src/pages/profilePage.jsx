import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";
import CardList from "../services/database/cardList";

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        const uid = authUser.uid;
        const userDocRef = doc(db, "users", uid);

        getDoc(userDocRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              setUser(docSnapshot.data());
            } else {
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <img src={user.photoURL} alt="Profile" />
          <p>{user.bio}</p>
          <p>{user.email}</p>
          <CardList user={user}/>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
