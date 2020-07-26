import React from "react";

function bookCard(props) {
  return (
    <div classname="card-container">
      <img src={props.image} alt="" />
      <div classname="desc">
        <h2>Title: {props.title}</h2>
        <h3>By: {props.author}</h3>
        <h4>{props.description}</h4>
      </div>
    </div>
  );
}

export default bookCard;
