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
                <Col className={"copyright"}>
                    <Row className={"copyright-date"}>Copyright © {year} Tristan White</Row>

                </Col>
                <Col  className={"socials"}>
                    <Socials />
                </Col>
                <Col >
                    <Row className={"svg-copyright"}>The background, circuit-primary is a derivative of
                        https://bgjar.com/circuit-primary by bgjar.com under CC by 4.0.
                        This is licenced under CC by 40.0 by Tristan White </Row>
                </Col>
            </Row>
        </Container>
    )
};

export default Footer;
