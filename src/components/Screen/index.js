import React from 'react';
import './index.css';
import Bar from '../Bar';

export default class Screen extends React.Component {

  
  render() {
    
    const array = this.props.array;
    return (
      <>
        <div className="screen">
          {
            array.map((value, index) => {
              return (<Bar key={index} height={value}/>);
            })
          }
        </div>
      </>
    );
  }
}