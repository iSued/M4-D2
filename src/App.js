import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import NavBar from "./components/NavBar";
import Fantasy from "./components/Fantasy";
import History from "./components/History";
import Horror from "./components/Horror";
import Romance from "./components/Romance";
import Scifi from "./components/Scifi";
import JumboTron from "./components/JumboTron";
import Footer from "./components/Footer";

import { Row, Container } from "react-bootstrap";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar title="StriveBooks" />
        <JumboTron title="StriveBooks" />
        <Container>
          <Row>
            <Romance />
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
