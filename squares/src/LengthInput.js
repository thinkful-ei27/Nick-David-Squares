import React from "react";

export default function LengthInput(props) {
    return (
            <label>Change Length:
            <input type="text" placeholder="e.g. 25" onChange={ (e) => props.handleChange(e)}>
            </input>
            </label>
    );
}