import React from "react";
import FoodBox from "./FoodBox";
import App from "./App";

class Form extends React.Component {
  render() {
    return (
      <div className="theForm">
        <h1>Create your items below</h1>
        <form onSubmit={this.props.addAFoodItem}>
          <input
            name="name"
            type="text" onChange={this.props.setItems}
          />
          <input
            name="calories"
            type="text" onChange={this.props.setCalories}
          />
          <input
            name="image"
            type="text" onChange={this.props.setImages}
          />
          <button>Add food item</button>
        </form>
      </div>
    );
  }
}

export default Form;
