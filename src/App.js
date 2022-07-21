import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader';
import Screen from './components/Screen';
import ButtonContainer from './components/ButtonContainer';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      array: [],
    }
  }

  MAX_HEIGHT = 380;

  generateArray = () => {

    const array = [];

    for (var i = 0; i < 26; i++){
      let num = Math.floor(Math.random() * this.MAX_HEIGHT);
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
        />
      </div>
    );
  }
  
}

