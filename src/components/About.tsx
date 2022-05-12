import React from 'react';
import "./About.css";

const About = () =>{
        return(
            <div className={"about"}>
                <h2 className={"header"}>About</h2>
                <p className={"paragraph"}>
                    I am a Full-Stack developer trainee at York Solutions living in Austin Tx.
                    I graduated with a degree in computer science from the University of North Texas in December 2020.
                    I am also Freelancing on the side.
                </p>
                <p className={"paragraph"}>
                    Besides coding, I am a musician who plays guitar, bass, keyboard, and drums. I am working on making an album right now.
                </p>
            </div>
        );
}

export default About;
