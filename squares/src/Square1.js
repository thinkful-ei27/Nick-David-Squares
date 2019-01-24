import React from 'react';
import './square.css';


export default function Square1(props){


    return (
        <div className='square' style={{backgroundColor: props.attributes.color1, height: props.attributes.length1, width: props.attributes.length1}}>
            <span></span>
        </div>
    )
} 