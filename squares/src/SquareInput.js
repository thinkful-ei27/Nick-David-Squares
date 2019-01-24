import React from 'react';

export default function SquareInput(props){
    let selector=[]; 
    for(let x = 0; x < props.length; x++){
        selector.push(<option value={x}>Square {x}</option>)
    }
    return(
        <select onChange={(e) => props.handleChange(e)}> 
            {selector}
        </select>
    )
}