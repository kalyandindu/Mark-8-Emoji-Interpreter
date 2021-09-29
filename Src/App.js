import React, { useState } from "react";
import "./styles.css";
var userName = "Emoji Interpreter";
const color = "blue";

var emojiListObject = {
  "😆": "Grinning",
  "🔥": "Fire",
  "😋": "Savoring",
  "🥺": "Pleading",
  "✨": "Sparkles",
  "🥰": "Smiley with hearts"
};

export default function App() {
  var [meaning, setInputText] = useState("");

  function inputTextChange(event) {
    var inputEmoji = event.target.value;
    meaning = emojiListObject[inputEmoji];
    if (meaning === undefined) {
      meaning = "Sorry, We dont have this in our database";
    }
    setInputText(meaning);
  }
  var emojiListArray = Object.keys(emojiListObject);

  function emojiClick(event) {
    setInputText(emojiListObject[event]);
  }

  return (
    <div className="App">
      <h1 style={{ color: color }}>{userName}</h1>
      <input onChange={inputTextChange}></input>
      <h2> {meaning}</h2>
      {emojiListArray.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
