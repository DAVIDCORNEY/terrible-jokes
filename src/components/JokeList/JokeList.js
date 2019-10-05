import React, { Component } from "react";
import axios from "axios";
import "./JokeList.css";
import Joke from "../Joke/Joke";
import uuid from "uuid/v4";

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
      jokes.push({ id: uuid(), text: res.data.joke, votes: 0 });
    }
    this.setState({ jokes });
  }

  handleVote = (id, vote) => {
    this.setState(prevState => ({
      jokes: prevState.jokes.map(joke =>
        joke.id === id ? { ...joke, votes: joke.votes + vote } : joke
      )
    }));
  };

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Terrible</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="Laughing Face"
          />
          <button className="JokeList-newJokes">New Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map(j => (
            <Joke text={j.text} votes={j.votes} key={j.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
