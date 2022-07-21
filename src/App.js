import React from 'react';
import AppHeader from './components/AppHeader';
import Screen from './components/Screen';
import ButtonContainer from './components/ButtonContainer';
import { BubbleSortAlgorithm } from './Algorithms/BubbleSortAlgorithm';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      array: [],
    }
  }

  MAX_HEIGHT = 380;
  MIN_HEIGHT = 25;

  generateArray = () => {

    const array = [];

    for (var i = 0; i < 26; i++){
      let num = Math.floor(Math.random() * (this.MAX_HEIGHT - this.MIN_HEIGHT + 1) + this.MIN_HEIGHT);
      array.push(num);
    }

    this.setState({ array: array });
  }

  componentDidMount() {
    this.generateArray();
  }
  
  render() {

    return (
      <div className="App">
        <AppHeader />
        <Screen array={this.state.array} />
        <ButtonContainer
          handlerNewArray={this.generateArray}
          bubbleSortHandler={BubbleSortAlgorithm}
        />
        <div className="footer"></div>
      </div>
    );
  }
  
}

