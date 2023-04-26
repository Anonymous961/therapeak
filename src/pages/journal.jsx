import "./styles/journal.css";
import { useState, useEffect } from "react";
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db, auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

const Journal = () => {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const now = new Date();

    try {
      const docRef = await addDoc(collection(db, "entries"), {
        title: title,
        entry: entry,
        timestamp: now,
      });

      const journalEntry = {
        id: docRef.id,
        title: title,
        timestamp: now,
      };

      await updateDoc(doc(db, "users", user.uid), {
        journal: arrayUnion(journalEntry),
      });

      setTitle("");
      setEntry("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="containerr">
        <div className="left">
          <form onSubmit={handleSubmit}>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <div className="entry">
              <input
                type="text"
                value={entry}
                id="entry"
                placeholder="Tell me what happened today ❤️‍🩹"
                onChange={(e) => setEntry(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="right">
          <div className="textt">
            <h1 className="journal-heading"> Let out your thoughts. 🧘🏻 </h1>
            <h2 className="journal-text1">
              Often releasing your thoughts out in a diary makes you feel much
              better. So note down or record all that you want to rant and the
              entry remains with you. We will predict how your day was.
            </h2>
            <h3 className="journal-text2">Sounds interesting right?</h3>
            <h4 className="journal-text3">Then c'mmon, start recording !</h4>
            <img src="https://i.postimg.cc/13nVvSm5/607f7d902f5de-unscreen.gif" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Journal;
