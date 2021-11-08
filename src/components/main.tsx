import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from 'react-router-dom';
import About from "./About";

const Main = () => {
    return (
        <div className="Main">
            <h1>Tristan White</h1>
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
                    <Routes>
                        <Route path= "/about"
                            element={ <About />}>
                        </Route>
                    </Routes>
                </nav>
            </Router>
        </div>
    );
}

export default Main;
