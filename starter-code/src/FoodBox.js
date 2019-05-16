import React from "react";
// import App from "./App"
class FoodBox extends React.Component {

    state = {
        name:this.props.name,
        calories: 0,
        quanity: 0
    }



    updateItems =(e) =>{
        this.setState({
            quanity:e.target.value,
            calories:e.target.value*this.props.calories
        });
    }

    addedItemsToAppJSState = () =>{
        this.props.updateFoodList(this.state)

    }


  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" onChange={this.updateItems} /> 
              </div>
              <div className="control">
                <button onClick={this.addedItemsToAppJSState}className="button is-info" >+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default FoodBox;