//this is the search form
//This is currently working with the API calls

import React from "react";
import "./style.css";

const SearchArea = (props) => {
  return (
    <div className="search-area">
      <form onSubmit={props.searchBook} action="">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          type="text"
          className="form-control"
          placeholder="Search for a Book"
          id="book"
        />
        <br></br>
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-success"
        >
          {" "}
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchArea;
