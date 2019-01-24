import React from 'react'

import LengthInput from './LengthInput'
import ColorInput from './ColorInput'
import SquareInput from './SquareInput'
export default function InputForm(props) {
console.log(props)
    return (
    <form onSubmit={(e) => e.preventDefault()}>
        <ColorInput handleChange={(e) => props.setColor(e)}/>
        <LengthInput handleChange={(e) => props.setLength(e)}/>
        <SquareInput handleChange={(e) => props.setCurrentIndex(e)}
        length={props.attributes.length}/>
    </form>
    )

}