import React from "react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrademark } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Footer = () => (
  <Container className="footer" fluid>
    <p>Panda Productions  <FontAwesomeIcon icon={faTrademark} size={"1x"} color={"#FAC8CD"} /></p>
  </Container>
);

export default Footer;