import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import bookCard from "../components/bookCard";

class Saved extends Component {
  state = {
    search: "",
    results: [],
  };

  render() {
    const searchArr = this.state.results;
    const booklist = searchArr.map((book) => (
      <bookCard
        title={book.title}
        image={book.image}
        author={book.author}
        github={book.github}
        about={book.about}
      />
    ));

    return (
      <div>
        <Container style={{ marginTop: 20 }}>
          <Row>
            <Col size="md-5">
              <h1> Search Results</h1>
              <h3> Happy Reading!</h3>
            </Col>
          </Row>
          {booklist}
        </Container>
      </div>
    );
  }
}
export default Saved;
