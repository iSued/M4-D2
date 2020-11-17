import React, { Component } from "react";
import historyBooks from "../data/history.json";
import { Col, Card, Button } from "react-bootstrap";

class History extends Component {
  render() {
    console.log("myHistoryBooks", historyBooks);

    return (
      <>
        {historyBooks.map((book) => (
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

export default History;
