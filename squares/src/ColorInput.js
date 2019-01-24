import React from 'react'
import './colorinput.css'

export default function Input(props) {
    return (
            <label>Change Color:
            <input type="text" placeholder="e.g. black" onChange={ (e) => props.handleChange(e)}>
            </input>
            </label>
    );
}