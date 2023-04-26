import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/cards.css";

const Card = ({ journal }) => {
  const [showDetails, setShowDetails] = useState(false);
  console.log(journal);
  return (
    <div className="cards">
      <div className="time">
        <p>At: {journal.timestamp.toString()}</p>
      </div>

      <div className="card-content">
        <h3>{journal.title}</h3>
      </div>

      <div className="card-delete">
        <img src="https://i.postimg.cc/G3G6ByrK/Vector.png" />
      </div>
    </div>
  );
};

export default Card;
