import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "./components/avatar";
import Socials from "./components/social";
import "./App.css";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Socials />
        </Row>
      </Container>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Hero />
        </Col>
        <Col md={4}></Col>
      </Row>

    </div>
  );
}

export default App;
