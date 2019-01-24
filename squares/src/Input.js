import React from 'react'

export default function Input(props) {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Change Color:
            </label>
            <input type="text" placeholder="e.g. black" onChange={ (e) => props.handleChange(e)}>
            </input>
        </form>
    );
}