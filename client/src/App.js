import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/saved";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import SearchForm from "./components/SearchArea";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <SearchForm />
          <Wrapper>
            <Route exact path="/" component={Saved} />
            <Route exact path="/save" component={Saved} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}
export default App;
