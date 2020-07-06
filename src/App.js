import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox.js';

class App extends Component {
  state = {
    food: [...foods],
    showForm: false,
    //for new food to be added
    newFoodName: '',
    newFoodCalories: '',
    newFoodImage: '',
    newFoodQuantity: '',
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

  toggleButton = () => {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  submitButton = (event) => {
    //to prevent submit refreshing the page -this is by default
    event.preventDefault();

    // console.log(event.target);

    let newFoodObj = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0,
    };

    let foodCopy = [...foods];
    foodCopy.unshift(newFoodObj);

    this.setState({
      food: foodCopy,
      showForm: false,
    });
  };

  handleChange = (event) => {
    // console.log(event.target.name);
    this.setState({
      //to create this function dinamic for all 3 properties of new food added we use the name value and use it as key -thats why we use []
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleButton}>Add new food</button>
        {this.state.showForm ? (
          <form onSubmit={this.submitButton}>
            <label>Name</label>
            <br />
            <input onChange={this.handleChange} type="text" name="name" />
            <br />
            <label>Calories</label>
            <br />
            <input onChange={this.handleChange} type="number" name="calories" />
            <br />
            <label>ImageURL</label>
            <br />
            <input onChange={this.handleChange} type="text" name="image" />
            <br />
            <button type="submit" value="Submit">
              submit
            </button>
          </form>
        ) : (
          ''
        )}
        {this.displayFood()}
      </div>
    );
  }
}

export default App;
