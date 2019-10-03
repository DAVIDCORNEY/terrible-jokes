import React, { Component } from "react";
import axios from "axios";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };
  state = {
    jokes: []
  };

  async componentDidMount() {
    const jokes = [];
    const url = "https://icanhazdadjoke.com/";
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get(url, {
        headers: { Accept: "application/json" }
      });
      jokes.push(res.data.joke);
    }
    this.setState({ jokes });
  }

  render() {
    return (
      <div>
        <h1>Terrible Jokes</h1>
      </div>
    );
  }
}

export default JokeList;
