import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

const JumboTron = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1>{props.title}</h1>
        <p>
          <em>Buy books but don't read them</em>
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumboTron;
