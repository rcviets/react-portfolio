import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./style.css";

const Socials = () => {
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Button href="https://github.com/rcviets" target="_blank" variant="link">
                        <FontAwesomeIcon className="social-icon" icon={faGithub} size={"2x"} color={"#FAC8CD"} />
                    </Button>
                    <Button href="https://www.linkedin.com/in/randaviets/" target="_blank" variant="link">
                        <FontAwesomeIcon className="social-icon" icon={faLinkedin} size={"2x"} color={"#FAC8CD"} />
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default Socials;