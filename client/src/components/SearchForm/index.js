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
          id="breed"
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
