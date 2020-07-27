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
    console.log(e.target.value);
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
