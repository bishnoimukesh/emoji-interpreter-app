import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "๐": "Grinning Face with Big Eyes",
  "๐": "Grinning Face with Smiling Eyes",
  "๐": "Beaming Face with Smiling Eyes",
  "๐": "Grinning Squinting Face",
  "๐": "Grinning Face with Sweat",
  "๐คฃ": "Rolling on the Floor Laughing",
  "๐": "Face with Tears of Joy",
  "๐": "Slightly Smiling Face",
  "๐": "Upside-Down Face",
  "๐" : "Smiling Face with Smiling Eyes",
  "๐" : "Winking Face",
  "๐ฅฐ" : "Smiling Face with Hearts",
  "๐" : "Smiling Face with Halo",
  "๐" : "Smiling Face with Heart-Eyes",
  "๐คฉ" : "Star-Struck",
  "๐" : "Face Blowing a Kiss",
  "๐" : "Kissing Face",
  "โบ๏ธ" : "Smiling Face",
  "๐" : "Kissing Face with Closed Eyes",
  "๐" : "Kissing Face with Smiling Eyes",
  "๐ฅฒ" : "Smiling Face with Tear",
  "๐" : "Face Savoring Food",
  "๐" : "Squinting Face with Tongue",
  "๐ค" : "Money-Mouth Face",
  "๐ค" : "Hugging Face",
  "๐คญ" : "Face with Hand Over Mouth",
  "๐คซ" : "Shushing Face",
  "๐ค" : "Thinking Face",
  "๐ค" : "Zipper-Mouth Face",
  "๐คจ" : "Face with Raised Eyebrow",
  "๐" : "Neutral Face",
  "๐" : "Expressionless Face",
  "๐ถ" : "Face Without Mouth",
  "๐ถโ๐ซ๏ธ" : "Face in Clouds",
  "๐" : "Smirking Face",
  "๐" : "Unamused Face",
  "๐" : "Face with Rolling Eyes",
  "๐ฌ" : "Grimacing Face",
  "๐ฎโ๐จ" : "Face Exhaling",
  "๐คฅ" : "Lying Face",
  "๐" : "Relieved Face",
  "๐" : "Pensive Face",
  "๐ช" : "Sleepy Face",
  "๐คค" : "Drooling Face",
  "๐ด" : "Sleeping Face",
  "๐ท" : "Face with Medical Mask",
  "๐ค" : "Face with Thermometer",
  "๐ค" : "Face with Head-Bandage",
  "๐คข" : "Nauseated Face",
  "๐คฎ" : "Face Vomiting",
  "๐คง" : "Sneezing Face",
  "๐ฅต" : "Hot Face",
  "๐ฅถ" : "Cold Face",
  "๐ฅด" : "Woozy Face",
  "๐ต" : "Dizzy Face"
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
        href="https://github.com/bishnoimukesh/emoji-interpreter-app"
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
