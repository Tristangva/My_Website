import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profile from '../assets/Profile_Pic.svg';
import "./Main.css";

const Main = () => {
    return (
        <Container className="main">
            <Row>
                <Col className={'intro'}>
                    <h2>Hello, I am Tristan White</h2>
                    <p>I am a newly graduated Computer Science major wishing to enter into the workforce as a Software Developer or Software Engineer</p>
                </Col>
                <Col className={'profile-pic'}>
                    <img src={profile} className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
}

export default Main;
