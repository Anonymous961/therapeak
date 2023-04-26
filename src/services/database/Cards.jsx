import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/cards.css"

const Card = ({ journal }) => {
  const [showDetails, setShowDetails] = useState(false);
  console.log(journal);
  return (
    <div class="cards">
    <div class="time">
      <p>At: {journal.timestamp.toString()}</p>
    </div>

    <div class="card-content">
      <h3>{journal.title}</h3>
    </div>


    <div class="card-delete">
      <img src="https://i.postimg.cc/G3G6ByrK/Vector.png"/>
    </div>

    
  </div>
  );
};

export default Card;
