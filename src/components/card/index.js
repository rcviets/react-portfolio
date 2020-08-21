import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
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
                    <Image className="job-image-celblox" src={Celblox} thumbnail />
                    <Card className="job-card">
                        <Card.Body>
                            <Card.Title className="job-title">CelBlox</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Current Project</Card.Subtitle>
                            <Card.Text className ="job-description">
                                In process React web app for a construction material manufacturer website.
                            </Card.Text>
                            <Card.Link className="job-link" href="https://rcviets.github.io/celblox_/" target="_blank">Production Site</Card.Link><br />
                            <Card.Link className="job-link" href="https://github.com/rcviets/celblox_" target="_blank">Code</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={"3"}>
                    <Image className="job-image" src={Camion} thumbnail />
                    <Card className="job-card">
                        <Card.Body>
                            <Card.Title className="job-title">Camion</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Group Project</Card.Subtitle>
                            <Card.Text className="job-description">
                                React and MongoDB web app with unique user accounts that can create and claim product.
                            </Card.Text>    
                            <Card.Link className="job-link" href="https://camion-app.herokuapp.com/" target="_blank">Production Site</Card.Link><br />
                            <Card.Link className="job-link" href="https://github.com/rcviets/Camion" target ="_blank">Code</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={"3"}>
                    <Image className="job-image" src={InitialD} thumbnail />
                    <Card className="job-card">
                        <Card.Body>
                            <Card.Title className="job-title">Initial D Trivia</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Video Game</Card.Subtitle>
                            <Card.Text className="job-description">
                                Vanilla javascript game with timed questions, score tracker, and win/loss scenario.
                            </Card.Text>
                            <Card.Link className="job-link" href="https://rcviets.github.io/TriviaGame/" target="_blank">Production Site</Card.Link><br />
                            <Card.Link className="job-link" href="https://github.com/rcviets/TriviaGame" target="_blank">Code</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={"3"}>
                    <Image className="job-image" src={Bamazon} thumbnail />
                    <Card className="job-card">
                        <Card.Body>
                            <Card.Title className="job-title">Bamazon</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Command Line Client</Card.Subtitle>
                            <Card.Text className="job-description">
                                Node based server and MySQL database that track store inventory and cost of purchases.
                            </Card.Text>
                            <Card.Link className="job-link" href="https://github.com/rcviets/bamazon" target="_blank">Code</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default JobCards;