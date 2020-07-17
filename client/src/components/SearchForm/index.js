import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  console.log(props);
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search for a book:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Harry Potter"
          id="search"
        />
        <button
          type="submit"
          onClick={props.handleFormSubmit}
          className="btn btn-primary"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
