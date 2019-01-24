import React, { Component } from 'react';
import Square from './Square';
import './squareRoot.css';

class SquareRoot extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'blue'
    }
  }
  render() {
    return (
        <Square />
    );
  }
}

export default SquareRoot;
