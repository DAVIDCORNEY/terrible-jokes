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
    const url = "https://icanhazdadjoke.com/";
    let res = await axios.get(url, { headers: { Accept: "application/json" } });
    console.log(res.data.joke);
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
