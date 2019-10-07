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
    jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
    loading: false
  };

  componentDidMount() {
    if (this.state.jokes.length === 0) this.getJokes();
  }

  async getJokes() {
    try {
      const jokesArr = [];
      const url = "https://icanhazdadjoke.com/";
      let seenJokes = new Set(this.state.jokes.map(j => j.text));
      while (jokesArr.length < this.props.numJokesToGet) {
        let res = await axios.get(url, {
          headers: { Accept: "application/json" }
        });
        let newJoke = res.data.joke;
        if (!seenJokes.has(newJoke)) {
          jokesArr.push({ id: uuid(), text: newJoke, votes: 0 });
        } else {
          console.log("Found a duplicate");
          console.log("newJoke");
        }
      }
      this.setState(
        prevState => ({
          loading: false,
          jokes: [...jokesArr, ...prevState.jokes]
        }),
        () =>
          window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
      );
    } catch (err) {
      alert(err);
      this.setState({ loading: false });
    }
  }

  handleVote = (id, vote) => {
    this.setState(
      prevState => ({
        jokes: prevState.jokes.map(joke =>
          joke.id === id ? { ...joke, votes: joke.votes + vote } : joke
        )
      }),
      () =>
        window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
    );
  };

  handleClick = () => {
    this.setState({ loading: true }, () => this.getJokes());
  };

  render() {
    let jokes = this.state.jokes.sort((a, b) => b.votes - a.votes);
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <i className="far fa-8x fa-laugh fa-spin" />
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      );
    }
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
          <button className="JokeList-newJokes" onClick={this.handleClick}>
            New Jokes
          </button>
        </div>
        <div className="JokeList-jokes">
          {jokes.map(j => (
            <Joke
              text={j.text}
              votes={j.votes}
              key={j.id}
              upVote={() => this.handleVote(j.id, 1)}
              downVote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
