import React from "react";

class Addfood extends React.Component {

  // state = {
  //   total=0,
  //   list=[]
  // }

  render() {
    return (
      <div>
        <div class="column content second-column">
          <h2 class="subtitle">Today's foods</h2>
          <ul value={key}>
            <li>{this.props.foodListCopy[key].name}</li>
            <li>{this.props.foodListCopy[key].name}</li>
          </ul>
          <strong>Total: 700 cal</strong>
        </div>
      </div>
    );
  }
}

export default Addfood