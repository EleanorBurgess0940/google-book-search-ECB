//This takes the information from the search function
//and then creates BookCards from the information passed down through props
//the if and else statement  below works with books that do not have an image
//Without that we would not have bookcards with no image.

import React from "react";
import BookCard from "../bookCard";
import "./style.css";

const SearchResults = (props) => {
  return (
    <div className="results">
      {props.books.map((book, i) => {
        if (typeof book.volumeInfo.imageLinks != "undefined") {
          return (
            <BookCard
              key={i}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              image={book.volumeInfo.imageLinks.thumbnail}
              description={book.volumeInfo.description}
              saveMe={props.saveMe}
            />
          );
        } else {
          return (
            <BookCard
              key={i}
              title={book.volumeInfo.title}
              author={book.volumeInfo.authors}
              description={book.volumeInfo.description}
              saveMe={props.saveMe}
            />
          );
        }
      })}
    </div>
  );
};

export default SearchResults;
