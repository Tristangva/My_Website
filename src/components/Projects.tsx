import React from "react";
import "./Projects.css";

const Projects = () => {
    return(
        <div className={"projects"}>
            <h2>
                Projects
            </h2>
            <li>
                <h4>Markdown and Code Editor</h4>
                <a href={"https://github.com/Tristangva/jbook_udemy_project"}>
                    Link
                </a>
                <p>
                    This is a project I'm making with a course on Udemy entitled "React and Typescript: Build a Portfolio Project". The application allows for the user to create a notebook that can be worked on in browser and saved on the users computer. The application creates fully functional code or markdown editors. The code editor allows for the user to write and run code in browser, as well as import outside modules. The markdown editor provides all the features in a standard markdown editor.

                    This project is a work in progress. Currently I am implementing a command line interface and will soon be creating the file saving system.
                </p>
            </li>
            <li>
                <h4>Search Engine</h4>
                <a href={"https://github.com/Tristangva/Search-Engine"}>
                    Link
                </a>
                <p>
                    For my Information Retrieval class, I had to make a search engine that tokenized, stemmed, indexed, and stored that data into text files. The project would read in a set of queries, and retrieve the documents most relevant using a vector space model. The query will be repaired in my own time to further improve it from it's current state. I also will add a React front end and a back end likely programmed with Ruby on Rails.
                </p>
            </li>

        </div>
    )
}

export default Projects;
