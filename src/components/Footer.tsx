import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import Socials from "./Socials";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();

    return (
        <Container fluid className={"footer"}>
            <Row>
                <Col md={"4"} className={"socials"}>
                    <Socials />
                </Col>
                <Col md={"4"} className={"copyright"}>
                    <h5>Copyright {year}</h5>
                </Col>
            </Row>
        </Container>
    )
};

export default Footer;
