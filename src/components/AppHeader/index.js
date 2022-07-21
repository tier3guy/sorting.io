import React from "react";
import './index.css';

export default class AppHeader extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <>
      <div className="header-container">
        <center><h2>Sorting Visualizer</h2></center>
      </div>
      </>
    );
  }
}