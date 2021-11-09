import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from 'react-router-dom';
import About from "./About";
import Contact from "./Contact";
import Main from "./main";
import Projects from "./Projects";
import Resume from "./Resume";

// Version 2 will have better code
function Nav_Bar(props: any) {
    return (
        <div className={"nav-bar"}>
            <Router>
                <nav>
                    <li>
                        <NavLink
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/resume"
                        >
                            Resume
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </li>
                    <Routes>
                        <Route path="/"
                               element={<Main/>}>
                        </Route>
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

                    </Routes>
                </nav>
            </Router>
        </div>
    );
}

export default Nav_Bar;
