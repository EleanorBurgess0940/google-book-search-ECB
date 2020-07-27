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
