import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox.js';

class App extends Component {
  state = {
    food: [...foods],
  };

  displayFood = () => {
    let displayFoodNow = this.state.food.map((eachElement) => {
      return (
        <FoodBox
          key={eachElement.name}
          name={eachElement.name}
          calories={eachElement.calories}
          image={eachElement.image}
          quantity={eachElement.quantity}
        />
      );
    });
    return displayFoodNow;
  };

  addNewFood = (name, calories, image, quantity) => {
    let newFood = {
      name: name,
      calories: calories,
      image: image,
      quantity: quantity,
    };

    let foodCopy = [...this.state.food];

    foodCopy.push(newFood);

    this.setState((food = foodCopy));
  };

  displayForm = () => {};

  render() {
    return (
      <div>
        <button onClick={this.displayForm}>Add new food</button>
        {this.displayFood()}
        />
      </div>
    );
  }
}

export default App;
