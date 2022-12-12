import "./styles.css";
import React, { useState } from "react";

var bcolor = "lightblue";
var emojipedia = {
  "😂": "Laughing",
  "😁": "Grinning Face",
  "😊": "Smile",
  "🤣": "Rolling on the floor Laughing",
  "😒": "Not Interested",
  "💩": "Poop",
  "😎": "Smart",
  "😉": "Wink",
  "🐸": "Frog"
};

var emojiWeKnow = Object.keys(emojipedia);

export default function App() {
  const [animalpedia, setanimalpedia] = useState("");

  function emojiInputHandler(event) {
    var emojiInput = event.target.value;

    var animalpedia = emojipedia[emojiInput];
    if (animalpedia === undefined) {
      animalpedia = "We don't know";
    }

    setanimalpedia(animalpedia);
  }

  function emojiClickHandler(emojiClick) {
    var animalpedia = emojipedia[emojiClick];
    setanimalpedia(animalpedia);
  }

  return (
    <div className="App">
      <div>
        <input onChange={emojiInputHandler}></input>

        <h2> {animalpedia} </h2>
        <br></br>
        <h3>Emoji I have </h3>
        {emojiWeKnow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ fontSize: "50px", padding: "4.5rem", cursor: "pointer" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
