import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hero from "./components/avatar";
import Socials from "./components/social";
import Title from "./components/title";
import JobCards from "./components/card";
import Footer from "./components/footer";
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
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Title />
        </Col>
        <Col md={4}></Col>
      </Row>
        <Col md={12}>
        <Row>
            <JobCards />
        </Row>
        </Col>
        <Footer />
    </div>
  );
}

export default App;
