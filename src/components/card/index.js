import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Celblox from "../../images/celblox.png";
import Camion from "../../images/camion.png";
import InitialD from "../../images/initialD.png";
import Bamazon from "../../images/bamazon.png";
import "./style.css";

const JobCards = () => {
    return (
        <Container>
            <Row>
                <Col md={"3"}>
                <Image className="job-image" src={Celblox} thumbnail />
                </Col>
                <Col md={"3"}>
                <Image className="job-image" src={Camion} thumbnail />
                </Col>
                <Col md={"3"}>
                <Image className="job-image" src={InitialD} thumbnail />
                </Col>
                <Col md={"3"}>
                <Image className="job-image" src={Bamazon} thumbnail />
                </Col>
            </Row>
        </Container>

    );
};

export default JobCards;