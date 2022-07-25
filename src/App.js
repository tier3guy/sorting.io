/* Utilities : In-built */
import React from 'react';

/* Custom Components import */
import AppHeader from './components/AppHeader';
import Screen from './components/Screen';
import ButtonContainer from './components/ButtonContainer';

import { getMergeSortAnimations } from './Algorithms/sortingAlgorithms';

const ANIMATION_SPEED_MS = 500;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';


/**
 * @Component - Main APP component
 * @Renders - the entire app 
 * @author - Avinash Gupta
 * @props - NA
 */
export default class App extends React.Component {

  //  Constructors
  constructor() {
    super();

    // States - array
    this.state = {
      array: [],
    }
  }

  // MAX_HEIGHT && MIN_HEIGHT - defines the maximum and the minimum height of the bars
  MAX_HEIGHT = 380;
  MIN_HEIGHT = 25;

  LENGTH = 26;



  // @Method - generates random array and sets it into the state
  generateArray = () => {

    const array = [];

    for (var i = 0; i < this.LENGTH; i++) {
      let num = Math.floor(Math.random() * (this.MAX_HEIGHT - this.MIN_HEIGHT + 1) + this.MIN_HEIGHT);
      array.push(num);
    }

    this.setState({ array: array });
  }

  componentDidMount() {
    this.generateArray();
  }

  // @Method -  Merge Sort
  mergeSort = () => {

    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      console.log(arrayBars);
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } 
      else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  render() {
  
    return (
      <div className="App">
    
        <AppHeader />
      
        <Screen array={this.state.array} />
    
        <ButtonContainer
          handlerNewArray={this.generateArray}
          mergeSort={this.mergeSort}
          array={this.state.array}
          n={this.LENGTH}
        />

        <div className="footer"></div>

      </div>
    );
  }
  
}