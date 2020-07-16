import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from "./pages/saved";
import Search from "./pages/search";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Saved} />
            <Route exact path="/save" component={Saved} />
            <Route exact path="/search" component={Search} />
          </Wrapper>
        </div>
      </Router>
    );
  }
}
export default App;
