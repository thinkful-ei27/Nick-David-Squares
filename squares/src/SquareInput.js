import React from 'react';

export default function SquareInput(props){

    return(
        <select onChange={(e) => props.handleChange(e)}> 
            <option value="1">Square 1</option> 
            <option value="2">Square 2</option> 
        </select>
    )
}