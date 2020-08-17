import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRegistered } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Footer = () => (
  <Container className="footer" fluid>
    <p>Randamus (w)Rites React  <FontAwesomeIcon icon={faRegistered} size={"1x"} color={"#FAC8CD"} /></p>
  </Container>
);

export default Footer;