import React from "react";

export default function LengthInput(props) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Change Length:
            </label>
            <input type="text" placeholder="e.g. 25" onChange={ (e) => props.handleChange(e)}>
            </input>
        </form>
    );
}