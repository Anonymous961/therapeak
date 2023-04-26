import React, { useState } from "react";
import "./styles/cards.css";

const Card = ({ journal }) => {
  const [showDetails, setShowDetails] = useState(false);
  console.log(journal);
  return (
    <div className="cards">
      <div className="time">
        <p>At: {journal.timestamp.toDate().toDateString()}</p>
      </div>

      <div className="card-content">{journal.title}</div>

      <div className="card-delete">
        <img src="https://i.postimg.cc/G3G6ByrK/Vector.png" alt="delete"/>
      </div>
    </div>
  );
};

export default Card;
