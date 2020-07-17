import React from "react";

function bookCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="content">
        <ul>
          <li>{props.title}</li>
          <li>{props.about}</li>
          <li>{props.deployed}</li>
          <li>{props.github}</li>
        </ul>
      </div>
    </div>
  );
}

export default bookCard;
