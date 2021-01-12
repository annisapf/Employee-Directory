import React from "react";


function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-1">{props.heading}</h1>
            <p>{props.heading2}</p>
        </div>
    );
}

export default Jumbotron;