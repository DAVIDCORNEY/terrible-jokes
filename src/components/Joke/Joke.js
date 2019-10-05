import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./Joke.css";

const Joke = props => {
  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <FaArrowUp onClick={props.upVote} />
        <span>{props.votes}</span>
        <FaArrowDown onClick={props.downVote} />
      </div>
      <div className="Joke-text">{props.text}</div>
    </div>
  );
};

export default Joke;
