// src/App.js

import React from "react";
import TypingText from "./TypingText";
import "./Typing.css";

function App() {
  return (
    <div className="App">
      <TypingText
        dynamicTexts={[
          "Welcome to Bits Blockchain",
          "Welcome to the world of Web3",
          "Welcome to the Future",
          "One Block at a Time: Join the Blockchain Revolution",
        ]}
      />
    </div>
  );
}

export default App;
