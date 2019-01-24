import React from 'react';
import './square.css';


export default function Square(props){


    return (
        <div className='square' style={{backgroundColor: props.attributes.color, height: props.attributes.length, width: props.attributes.length}}>
            <span></span>
        </div>
    )
} 