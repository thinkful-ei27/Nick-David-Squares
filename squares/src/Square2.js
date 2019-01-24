import React from 'react';
import './square.css';


export default function Square2(props){


    return (
        <div className='square' style={{backgroundColor: props.attributes.color2, height: props.attributes.length2, width: props.attributes.length2}}>
            <span></span>
        </div>
    )
} 