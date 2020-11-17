import React, { Component } from "react";
import scifiBooks from "../data/scifi.json";
import { Col, Card, Button } from "react-bootstrap";

class Scifi extends Component {
  render() {
    console.log("myScifiBooks", scifiBooks);

    return (
      <>
        {scifiBooks.map((book) => (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  {book.category}
                  <br />
                  {book.asin}
                </Card.Text>
                <Button variant="primary">{book.price}$</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </>
    );
  }
}

export default Scifi;
