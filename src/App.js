import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😊" : "Smiling Face with Smiling Eyes",
  "😉" : "Winking Face",
  "🥰" : "Smiling Face with Hearts",
  "😇" : "Smiling Face with Halo",
  "😍" : "Smiling Face with Heart-Eyes",
  "🤩" : "Star-Struck",
  "😘" : "Face Blowing a Kiss",
  "😗" : "Kissing Face",
  "☺️" : "Smiling Face",
  "😚" : "Kissing Face with Closed Eyes",
  "😙" : "Kissing Face with Smiling Eyes",
  "🥲" : "Smiling Face with Tear",
  "😋" : "Face Savoring Food",
  "😝" : "Squinting Face with Tongue",
  "🤑" : "Money-Mouth Face",
  "🤗" : "Hugging Face",
  "🤭" : "Face with Hand Over Mouth",
  "🤫" : "Shushing Face",
  "🤔" : "Thinking Face",
  "🤐" : "Zipper-Mouth Face",
  "🤨" : "Face with Raised Eyebrow",
  "😐" : "Neutral Face",
  "😑" : "Expressionless Face",
  "😶" : "Face Without Mouth",
  "😶‍🌫️" : "Face in Clouds",
  "😏" : "Smirking Face",
  "😒" : "Unamused Face",
  "🙄" : "Face with Rolling Eyes",
  "😬" : "Grimacing Face",
  "😮‍💨" : "Face Exhaling",
  "🤥" : "Lying Face",
  "😌" : "Relieved Face",
  "😔" : "Pensive Face",
  "😪" : "Sleepy Face",
  "🤤" : "Drooling Face",
  "😴" : "Sleeping Face",
  "😷" : "Face with Medical Mask",
  "🤒" : "Face with Thermometer",
  "🤕" : "Face with Head-Bandage",
  "🤢" : "Nauseated Face",
  "🤮" : "Face Vomiting",
  "🤧" : "Sneezing Face",
  "🥵" : "Hot Face",
  "🥶" : "Cold Face",
  "🥴" : "Woozy Face",
  "😵" : "Dizzy Face"
};

var knownEmojis = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    // console.log(meaning);
    if (meaning == undefined) {
      meaning = "We dont have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
            <a
        id="github-repo"
        title="Source code for this app"
        href="https://github.com/bishnoimukesh/emoji-interpretor-app"
      >
        <i className="fab fa-github"></i>
      </a>
      <h1>Emoji Meaning</h1>
      
      <input onChange={emojiInputHandler} 
      placeholder="Enter your emoji here"/>
      <div id="mean"> {meaning} </div>
      <hr></hr>
      <h2>Emojis we know</h2>
      {knownEmojis.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
