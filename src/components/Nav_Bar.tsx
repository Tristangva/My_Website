import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Main from "./Main";
import Projects from "./Projects";
import Resume from "./Resume";
import './Nav_Bar.css';

const Bootstrap_Nav = () => {
    return(
        <Navbar collapseOnSelect fixed={'top'} expand={'sm'} bg={'dark'} variant={'dark'}>
            <Container>
                <Navbar.Toggle aria-controls={ 'responsive-nav-bar'} />
                <Navbar.Collapse id={ 'responsive-nav-bar'}>
                    <Nav>
                        <Nav.Link href={'/'}>Home</Nav.Link>
                        <Nav.Link href={'/about'}> About </Nav.Link>
                        <Nav.Link href={'projects'}> Projects </Nav.Link>
                        <Nav.Link href={'/resume'}> Resume </Nav.Link>
                        <Nav.Link href={'/contact'}> Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const Nav_Bar = () => {

    return (
        <div className={"nav-bar"}>
            <Router>
                <Bootstrap_Nav />
                <Routes>
                    <Route path= "/about"
                           element={ <About />}>
                    </Route>
                    <Route path="/projects"
                           element={ <Projects />}>
                    </Route>
                    <Route path="/resume"
                           element={ <Resume />}>
                    </Route>
                    <Route path="/contact"
                           element={ <Contact />}>
                    </Route>
                    <Route path="/"
                           element={<Main/>}>
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default Nav_Bar;
