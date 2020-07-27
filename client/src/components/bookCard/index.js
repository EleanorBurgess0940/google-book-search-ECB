///this will create a BookCart with props passed from the search button
//the save me button on this site does not work I am still working on that

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

//this exports the bookCard
//the book card is loosely based on the cartoon friend activity we did in class
