import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import "bulma/css/bulma.css";
import FoodBox from "./FoodBox";
import Form from "./Form"
import Search from "./Search"
// import Addfood from "./Addfood"

class App extends Component {
  state = {
    filteredFoods: foods,
    food: foods,
    name: '',
    calories: 0,
    image: '',
    foodList:{

    }
    
  };

  

  addAFoodItem = (e) => {
    e.preventDefault()

    let newItems = [...this.state.filteredFoods]

    newItems.push( {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    })
    this.setState({
      filteredFoods: newItems
    })   

  }

  setItems = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  setCalories = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })

  }

  setImages = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
    
  }

  filterItems = (e) => {
    let filter = this.state.food.filter((comida)=>{
      return comida.name.toLowerCase().includes(e.target.value.toLowerCase())
      
    })
    this.setState({
      filteredFoods: filter
    })
  }

  addFood = () => {
    // e.preventDefault();
      

    // let addedFood = this.state.addedFood;
    // addedFood.push(this.addedFood)
    
  }


  updateFoodList = (food) => {
    console.log(food)
    let foodListCopy = { ...this.state.foodList }
    //foodListCopy['hello'] = 'world '+Date.now()
    foodListCopy[ food.name ] = food
    //foodListCopy [ Pizza ] = { quantity: 5, calories: 2000, name: Pizza }
    this.setState({ foodList:foodListCopy })
  }
  
  showFoodList = () => {
    let foodListCopy = { ... this.state.foodList }
    return Object.keys(foodListCopy).map(function(key) {
      return <li value={key}>
              <span >{foodListCopy[key].name} | </span>
              <span >{foodListCopy[key].calories}| </span>
              <span >{foodListCopy[key].quantity}  </span>
            </li>
            
    });

  }

  

  render() {
    let fooditems = this.state.filteredFoods.map((food, i) => {

      return (
        
        <FoodBox key={i} image={food.image} name={food.name} calories={food.calories} 
        addFood={this.addFood} updateFoodList={ this.updateFoodList }/>
        
        
      );
    });

    return (
      <div className="App">
      <Search filter={this.filterItems}/>
      <Form addAFoodItem={this.addAFoodItem} setItems={this.setItems} setCalories={this.setCalories} setImages={this.setImages}/>
        <h1>Item list</h1>
        {fooditems}
        <div>
        {this.showFoodList()}
        </div>
        {/* <Addfood/> */}
        
      </div>
    );
  }
}

export default App;
