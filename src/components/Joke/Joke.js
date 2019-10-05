import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./Joke.css";

const Joke = props => {
  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <FaArrowUp className="arrowUp" onClick={props.upVote} />
        <span className="Joke-votes">{props.votes}</span>
        <FaArrowDown className="arrowDown" onClick={props.downVote} />
      </div>
      <div className="Joke-text">{props.text}</div>
      <div className="Joke-smiley">
        <i
          class="em em-rolling_on_the_floor_laughing"
          aria-label="ROLLING ON THE FLOOR LAUGHING"
        ></i>
      </div>
    </div>
  );
};

export default Joke;
