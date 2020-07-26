import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import bookCard from "../components/bookCard";
function Search() {
  return (
    <div>
      <Container>
        <Row>
          <Col size="md-12">
            <h1>Search</h1>
            <bookCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
