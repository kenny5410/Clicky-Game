//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import car from "./car.json";
import "./App.css";

class App extends Component {
  state = {
    car,
    clickedcar: [],
    score: 0
  };

  imageClick = event => {
    const currentcar = event.target.alt;
    const carAlreadyClicked =
      this.state.clickedcar.indexOf(currentcar) > -1;

    if (carAlreadyClicked) {
      this.setState({
        car: this.state.car.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedcar: [],
        score: 0
      });
        alert("You lose. Try Again");

    } else {
      this.setState(
        {
          car: this.state.car.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedcar: this.state.clickedcar.concat(
            currentcar
          ),
          score: this.state.score + 1
        },       
        () => {
          if (this.state.score === 12) {
            alert("Great Guessing! You Win!");
            this.setState({
              car: this.state.car.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedcar: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.car.map(car => (
            <FriendCard
              imageClick={this.imageClick}
              id={car.id}
              key={car.id}
              image={car.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;