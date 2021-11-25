import React from "react";
import { Row, Tab, Tabs} from 'react-bootstrap';

import './Resume.css';

//bootstrap container?

const Resume = () => {
    return(
        <section id={"resume"}>
            <div className={'Resume'}>
               <Tabs defaultActiveKey={"skills"}>
                   <Tab eventKey={"row-education"} title={"Education"}>
                        <div className={"row-education"}>
                            <h3>University of North Texas - B.S. Computer Science</h3>
                            <p>
                                Aug 2016 - Dec 2020
                            </p>
                            <p>
                                I spent most of my school learning the basics with C++. In the later half of my education, I began to work on web development
                                and took electives focusing on cybersecurity. Some classes I took include:
                            </p>
                            <ul>
                                <li>
                                    Data Structures and Algorithms
                                </li>
                                <li>
                                    Fundamentals of Database Systems
                                </li>
                                <li>
                                    Computer Security
                                </li>
                                <li>
                                    Information Retrieval
                                </li>
                                <li>
                                    Computer Networks
                                </li>
                                <li>
                                    Secure E-Commerce
                                </li>
                                <li>
                                    Software Engineering
                                </li>
                                <li>
                                    Software Development Capstone
                                </li>
                            </ul>
                        </div>
                   </Tab>
                    <Tab eventKey={"row-work"} title={"Experience"}>
                        <div className={"row-work"}>
                            <h3>Freelancer</h3>
                                <p> Oct 2021 - Present</p>

                            <h3>RetailMeNot - Quality Assurance Intern</h3>
                                <p>May 2018 - Aug 2018</p>
                                <ul>
                                    <li>
                                        Learned problem solving skills to find bugs in the RetailMeNot IOS and Android Applications, saving time for developers, and completed about 300 test cases per regression.
                                    </li>
                                    <li>
                                        Read JSON files to determine if the apps analytics were tracking correctly ensuring the company made ad revenue from impressions.
                                    </li>
                                    <li>
                                        Learned communication skills to collaborate with teams to report bugs and test the fixes.
                                    </li>
                                    <li>
                                        Saved quality assurance engineers time to allow for them to work on the automation of tests.
                                    </li>
                                    <li>
                                        Wrote python Selenium scripts for automated tests during spare time between regressions.
                                    </li>
                                </ul>
                        </div>
                    </Tab>
                   <Tab eventKey={"skills"} title={"Skills"}>
                        <div className={"skills"}>
                            <Row>
                                <i className="devicon-cplusplus-plain skill-icon" style={{ fontSize: "250%" }} >
                                    <p
                                        className="text-center"
                                        style={{ fontSize: "40%", marginTop: "4px" }}
                                    >
                                        C++
                                    </p>
                                </i>
                                <i className="devicon-python-plain skill-icon" style={{ fontSize: "250%" }} >
                                    <p
                                        className="text-center"
                                        style={{ fontSize: "40%", marginTop: "4px" }}
                                    >
                                        Python
                                    </p>
                                </i>
                                <i className="devicon-javascript-plain skill-icon" style={{ fontSize: "250%" }} >
                                    <p
                                        className="text-center"
                                        style={{ fontSize: "40%", marginTop: "4px" }}
                                    >
                                        Javascript
                                    </p>
                                </i>
                                <i className="devicon-typescript-plain skill-icon" style={{ fontSize: "250%" }} >
                                    <p
                                        className="text-center"
                                        style={{ fontSize: "40%", marginTop: "4px" }}
                                    >
                                        TypeScript
                                    </p>
                                </i>
                                <i className="devicon-django-plain skill-icon" style={{ fontSize: "250%" }} >
                                    <p
                                        className="text-center"
                                        style={{ fontSize: "40%", marginTop: "4px" }}
                                    >
                                        Django
                                    </p>
                                </i>
                                <i className="devicon-react-original skill-icon" style={{ fontSize: "250%" }} >
                                    <p
                                        className="text-center"
                                        style={{ fontSize: "40%", marginTop: "4px" }}
                                    >
                                        React
                                    </p>
                                </i>
                                <i className="devicon-postgresql-plain skill-icon" style={{ fontSize: "250%" }} >
                                    <p
                                        className="text-center"
                                        style={{ fontSize: "40%", marginTop: "4px" }}
                                    >
                                        PostgreSQL
                                    </p>
                                </i>
                                <i className="devicon-git-plain skill-icon" style={{ fontSize: "250%" }} >
                                    <p
                                        className="text-center"
                                        style={{ fontSize: "40%", marginTop: "4px" }}
                                    >
                                        Git
                                    </p>
                                </i>
                                <i className="devicon-unix-original skill-icon" style={{ fontSize: "250%" }} >
                                    <p
                                        className="text-center"
                                        style={{ fontSize: "40%", marginTop: "4px" }}
                                    >
                                        Unix
                                    </p>
                                </i>
                                <i className="devicon-linux-plain skill-icon" style={{ fontSize: "250%" }} >
                                    <p
                                        className="text-center"
                                        style={{ fontSize: "40%", marginTop: "4px" }}
                                    >
                                        Linux
                                    </p>
                                </i>

                            </Row>
                        </div>
                   </Tab>
               </Tabs>
            </div>
        </section>
    )
}

export default Resume;
