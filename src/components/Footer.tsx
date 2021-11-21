import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Socials from "./Socials";
import "./Footer.css";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className={"footer"}>
            <Row>
                <Col className={"socials"}>
                    <Socials />
                </Col>
                <Col className={"copyright"}>
                    <p>Copyright © {year} Tristan White</p>
                </Col>
            </Row>
        </Container>
    )
};

export default Footer;
