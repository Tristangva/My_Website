import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import "./Socials.css";

// Objects for links

// uses https://www.digitalocean.com/community/tutorials/creating-a-social-follow-component-in-react
// for code

const Socials = () => {

    return(
        <div>
            <a href={"https://github.com/Tristangva"}
                className={"github social"}>
                <FontAwesomeIcon icon={faGithub} size={"2x"} />
            </a>
            <a href={"https://www.linkedin.com/in/tristan-white-920245133/"}
               className={"linkedin social"}>
                <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
            </a>
        </div>

    )
}

export default Socials;
