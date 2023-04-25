import { useState } from "react";
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../firebase";

const JournalForm = ({ user }) => {
  const [title, setTitle] = useState("");
  const [entry, setEntry] = useState("");

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="entry">Entry:</label>
      <textarea
        id="entry"
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default JournalForm;
