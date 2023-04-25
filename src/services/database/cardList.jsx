import { useState, useEffect } from "react";

import Card from "./Cards";

const CardList = ({ user }) => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    setJournals(user.journal);
  }, [user.journal]);

  return (
    <div>
      {journals.map((journal) => (
        <Card key={journal.id} journal={journal} />
      ))}
    </div>
  );
};

export default CardList;
