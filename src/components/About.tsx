import React from 'react';
import "./About.css";

const About = () =>{

        return(
            <div className={"about"}>
                <h2 className={"header"}>About</h2>
                <p className={"paragraph"}>
                    I am a programmer living in Austin Tx. I graduated with a degree in computer science from the University of North Texas in December 2020.
                    I wish to enter into the workforce as a software engineer. While I am trying to find a job,
                    I intend to Freelance as a Fullstack web developer.
                    I have been taking courses on Udemy expanding on what I learned in school and to keep learning.
                </p>
                <p>
                    Besides coding, I am a musician who plays guitar, bass, keyboard, and drums.
                </p>
            </div>
        );

}

export default About;
