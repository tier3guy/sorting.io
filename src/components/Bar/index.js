import React from 'react';
import './index.css';

export default class Bar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    const height = `${this.props.height}px`;

    return (
      <div style={{ height: height }} className="bar">
      <div class="height-text"> { this.props.height } </div>
      </div>
    );
  }
}