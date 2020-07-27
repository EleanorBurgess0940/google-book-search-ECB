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
      <button
        type="submit"
        onClick={props.saveMe}
        title={props.title}
        author={props.author}
        image={props.image}
        description={props.description}
        className=""
      >
        {" "}
        Save me for later!{" "}
      </button>
    </div>
  );
}

export default bookCard;
