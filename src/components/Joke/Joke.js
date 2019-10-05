import React, { Component } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./Joke.css";

class Joke extends Component {
  getReaction(votes) {
    if (votes >= 15) {
      return {
        color: "#4CAF50",
        emoji: "em em-rolling_on_the_floor_laughing",
        aria: "rolling on the floor laughing"
      };
    } else if (votes >= 12) {
      return { color: "#8BC34A", emoji: "em em-laughing", aria: "laughing" };
    } else if (votes >= 9) {
      return { color: "#CDDC39", emoji: "em em-smiley", aria: "smiley" };
    } else if (votes >= 6) {
      return {
        color: "#FFEB3B",
        emoji: "em em-slightly_smiling_face",
        aria: "smiling face"
      };
    } else if (votes >= 3) {
      return {
        color: "#FFC107",
        emoji: "em em-neutral_face",
        aria: "neutral face"
      };
    } else if (votes >= 0) {
      return { color: "#FF9800", emoji: "em em-confused", aria: "confused" };
    } else {
      return { color: "#F44336", emoji: "em em-angry", aria: "angry" };
    }
  }
  render() {
    const { votes, upVote, downVote, text } = this.props;
    const reactions = this.getReaction(votes);
    const { color, emoji, aria } = reactions;
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <FaArrowUp className="arrowUp" onClick={upVote} />
          <span className="Joke-votes" style={{ borderColor: color }}>
            {votes}
          </span>
          <FaArrowDown className="arrowDown" onClick={downVote} />
        </div>
        <div className="Joke-text">{text}</div>
        <div className="Joke-smiley">
          <i className={emoji} aria-label={aria}></i>
        </div>
      </div>
    );
  }
}

export default Joke;
