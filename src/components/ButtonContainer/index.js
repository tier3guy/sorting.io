import React from 'react';
import './index.css';

export default class ButtonContainer extends React.Component {

  array = this.props.array;
  n = this.props.n;

  render() {

    return (

      <div className="btn-container">
        <button className="btn" onClick={() => this.props.handlerNewArray()}>New Array</button>
        <button className="btn">Bubble Sort</button>
        <button className="btn" onClick={() => this.props.mergeSort()}>Merge Sort</button>
        <button className="btn">Quick Sort</button>
        <button className="btn">Heap Sort</button>
      </div>
    );
  }
}