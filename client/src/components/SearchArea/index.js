import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class Books extends Component {
  state = {
    books: [],
    search: "",
    error: "",
  };

  componentDidMount() {
    API.getBooks()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
    console.log(event.target.value);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    API.search(this.state.search)
      .then((res) => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        console.log(res.data.items);
        this.setState({ books: res.data.items });
        console.log(this.state.books);
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  render() {
    return (
      <div>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchResults books={this.state.books} />
      </div>
    );
  }
}

export default Books;
