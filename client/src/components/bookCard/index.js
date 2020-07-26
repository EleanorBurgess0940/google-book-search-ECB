import React from "react";

function bookCard(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} alt="" />
      </div>

      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default bookCard;
