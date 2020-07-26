import React from "react";
import BookCard from "../bookCard";
import "./style.css";

const SearchResults = (props) => {
  return (
    <div className="results">
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={i}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors[0]}
            secondAuthor={book.volumeInfo.authors[1]}
            image={book.volumeInfo.imageLinks.thumbnail}
            description={book.volumeInfo.description}
          />
        );
      })}
    </div>
  );
};

export default SearchResults;
