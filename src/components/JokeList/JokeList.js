import React, { Component } from "react";
import axios from "axios";

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };
  state = {
    jokes: []
  };

  componentDidMount() {
    let jokes = [];
    const url = "https://icanhazdadjoke.com/";
    return axios
      .get(url, { headers: { Accept: "application/json" } })
      .then(({ data }) => {
        console.log(data);
      });
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
