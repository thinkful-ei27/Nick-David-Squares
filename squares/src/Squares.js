import React from 'react';


export default function Square(props){
    const squaresArray = props.attributes.squares.map((square, index) => {
        return (
            <div className='square' key={index} style={{backgroundColor: square.color, height: square.length, width: square.length}}>
                <span>{index}</span>
            </div>
        )
    });

    return (
       <div role='container' className='container'>
         {squaresArray}
       </div>
    )
} 