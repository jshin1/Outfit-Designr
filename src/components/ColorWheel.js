import React, { Component } from 'react';

class ColorWheel extends Component {

  componentDidMount() {
    const canvas = this.refs.canvas
    const ctx = canvas.getContext("2d")
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
  }

  render() {
    return (
      <div>
      <canvas ref="canvas" width={640} height={425} />
      </div>
    );
  }

}

export default ColorWheel;
