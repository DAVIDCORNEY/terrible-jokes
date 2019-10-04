import React from "react";
import { FaArrowUp, FaArrowDown } from "./react-icons/fa";

const Joke = () => {
  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <FaArrowUp />
        <span>{props.votes}</span>
        <FaArrowDown />
      </div>
      <div className="Joke-text">{props.text}</div>
    </div>
  );
};

export default Joke;
