import React, {Component} from "react";
import { Link } from "react-router-dom";

function Nav_Bar(props: any) {
    return (
        <div className={"navication"}>
            <Link to={'/about'}>
                About
            </Link>
        </div>
    );
}
