import React from 'react';
import './index.css';

export default class ButtonContainer extends React.Component {

  render() {

    return (

      <div className="btn-container">
        <button className="btn" onClick={() => this.props.handlerNewArray()}>New Array</button>
        <button className="btn">Merge Sort</button>
        <button className="btn">Bubble Sort</button>
        <button className="btn">Quick Sort</button>
        <button className="btn">Heap Sort</button>
      </div>
    );
  }
}