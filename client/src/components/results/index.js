//This adds functionality to the searchField
//This will take the state of searchField and push them to the Api
//the handlechange function will deal with people typing into the field
//the handleSearch will push the data that a person has typed in to the API
//it also deals with the button

import React, { Component } from "react";
import SearchForm from "../SearchForm/index";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
      saveMe: [],
    };
  }

  handleChange(event) {
    this.setState({ searchField: event.target.value });
    console.log("handle");
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    return (
      <div>
        <SearchForm handleSearch={this.handleSearch} />
      </div>
    );
  }
}

export default Books;
