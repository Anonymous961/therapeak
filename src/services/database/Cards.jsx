import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ journal }) => {
  const [showDetails, setShowDetails] = useState(false);
  console.log(journal);
  return (
    <div>
      <div>
        <h3>{journal.title}</h3>
      </div>

      <div>
        <button onClick={() => setShowDetails(true)}>
          <Link>View More</Link>
        </button>
      </div>

      <div>
        <p>At: {journal.timestamp.toString()}</p>
      </div>
    </div>
  );
};

export default Card;
