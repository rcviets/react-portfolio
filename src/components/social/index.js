import React from "react";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Socials = () => {
    return (
        <Container>
            <Row>
            <FontAwesomeIcon className="social-icon" icon={faGithub} size={"2x"} color={"#FAC8CD"} />
            <FontAwesomeIcon className="social-icon" icon={faLinkedin} size={"2x"} color={"#FAC8CD"} />
            <FontAwesomeIcon className="social-icon" icon={faEnvelopeOpenText} size={"2x"} color={"#FAC8CD"} />
            </Row>
        </Container>
    );
};

export default Socials;