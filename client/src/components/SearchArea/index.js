import React, { Component } from "react";
import API from "../../utils/API";
import SearchForm from "../SearchForm";
import SearchResults from "../SearchResults";
import axios from "axios";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class Books extends Component {
  state = {
    books: [],
    search: "",
    error: "",
    savedBooks: [],
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
        console.log(res);
        this.setState({ books: res.data.items });
        console.log(this.state.books);
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  handleSaveSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);

    axios
      .post("/", {
        title: event.target.title,
        author: event.target.author,
        image: event.target.image,
        description: event.target.description,
      })
      .then((response) => {
        if (response.data) {
          this.setState({
            redirectTo: "/login",
          });
        } else {
          console.log("sign-up error");
        }
      })
      .catch((error) => {
        console.log("signup error: ");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <SearchForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <SearchResults
          books={this.state.books}
          saveMe={this.handleSaveSubmit}
        />
      </div>
    );
  }
}

export default Books;
