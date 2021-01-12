import React from "react";

function Search(props) {
    return (
        <div className="form-group justify-content-center form-inline">
            <input
                onChange={props.handleInputChange}
                onKeyDown={props.onKeyDown}
                value={props.value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Find employees here..."
                id="search"
                autoFocus
            />
        </div>
    );
}

export default Search;