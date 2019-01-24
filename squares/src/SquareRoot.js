import React, { Component } from 'react';
import Square from './Squares';
import './squareRoot.css';
import ColorInput from './ColorInput';
import LengthInput from './LengthInput';
import SquareInput from './SquareInput';

class SquareRoot extends Component {
  constructor(props){
    super(props);
    this.state = {
      squares: [{
        color: "blue",
        length: "50px"
      },
      {
        color: "black",
        length: "25px"
      },
      {
        color: "red",
        length: "400px"
      }],
      currentIndex: 0
}
  }

  validateColor(e) {
    const LongString = "AliceBlue  AntiqueWhite  Aqua  Aquamarine  Azure  Beige  Bisque  Black  BlanchedAlmond  Blue  BlueViolet  Brown  BurlyWood  CadetBlue  Chartreuse  Chocolate  Coral  CornflowerBlue  Cornsilk  Crimson  Cyan  DarkBlue  DarkCyan  DarkGoldenRod  DarkGray  DarkGrey  DarkGreen  DarkKhaki  DarkMagenta  DarkOliveGreen  DarkOrange  DarkOrchid  DarkRed  DarkSalmon  DarkSeaGreen  DarkSlateBlue  DarkSlateGray  DarkSlateGrey  DarkTurquoise  DarkViolet  DeepPink  DeepSkyBlue  DimGray  DimGrey  DodgerBlue  FireBrick  FloralWhite  ForestGreen  Fuchsia  Gainsboro  GhostWhite  Gold  GoldenRod  Gray  Grey  Green  GreenYellow  HoneyDew  HotPink  IndianRed   Indigo   Ivory  Khaki  Lavender  LavenderBlush  LawnGreen  LemonChiffon  LightBlue  LightCoral  LightCyan  LightGoldenRodYellow  LightGray  LightGrey  LightGreen  LightPink  LightSalmon  LightSeaGreen  LightSkyBlue  LightSlateGray  LightSlateGrey  LightSteelBlue  LightYellow  Lime  LimeGreen  Linen  Magenta  Maroon  MediumAquaMarine  MediumBlue  MediumOrchid  MediumPurple  MediumSeaGreen  MediumSlateBlue  MediumSpringGreen  MediumTurquoise  MediumVioletRed  MidnightBlue  MintCream  MistyRose  Moccasin  NavajoWhite  Navy  OldLace  Olive  OliveDrab  Orange  OrangeRed  Orchid  PaleGoldenRod  PaleGreen  PaleTurquoise  PaleVioletRed  PapayaWhip  PeachPuff  Peru  Pink  Plum  PowderBlue  Purple  RebeccaPurple  Red  RosyBrown  RoyalBlue  SaddleBrown  Salmon  SandyBrown  SeaGreen  SeaShell  Sienna  Silver  SkyBlue  SlateBlue  SlateGray  SlateGrey  Snow  SpringGreen  SteelBlue  Tan  Teal  Thistle  Tomato  Turquoise  Violet  Wheat  White  WhiteSmoke  Yellow  YellowGreen"
    let ColorArray = LongString.toLowerCase().split('  ');
    return ColorArray.includes(e.toLowerCase()) ? true : false;
  }

  setColor(e){
    if(this.validateColor(e.target.value)){
    const color = e.target.value;
    if(this.state.currentSquare === 1){
      this.setState({
        color1: color
      })
    } else if(this.state.currentSquare === 2) {
        this.setState({
          color2: color
        })
    }
    console.log(color)}
  }


  setLength(e){
    const length = e.target.value + 'px';
    if(this.state.currentSquare === 1){
      this.setState({
        length1: length
      })
    } else if(this.state.currentSquare === 2) {
        this.setState({
          length2: length
        })
    }
    console.log(length)
  }

  setCurrentSquare(e) {
    const currentSquare = e.target.value;
    this.setState({
      currentSquare: Number(currentSquare)
    })
  }

  render() {
    return (
      <div>
        <ColorInput handleChange={(e) => this.setColor(e)}/>
        <LengthInput handleChange={(e) => this.setLength(e)}/>
        <SquareInput handleChange={(e) => this.setCurrentSquare(e)}/>
        <Square attributes={this.state}/>
      </div>
    );
  }
}

export default SquareRoot;
