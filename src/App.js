import React, { Component } from "react";
import JokeList from "./components/JokeList/JokeList";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <JokeList />
      </div>
    );
  }
}

export default App;
