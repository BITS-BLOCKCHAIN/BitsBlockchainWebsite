// src/TypingText.js

import React, { useState, useEffect } from "react";
import "./Typing.css";

const TypingText = ({ staticText, dynamicTexts }) => {
  const [staticTyped, setStaticTyped] = useState(false);
  const [dynamicTextIndex, setDynamicTextIndex] = useState(0);
  const [dynamicTextTyped, setDynamicTextTyped] = useState("");

  useEffect(() => {
    const staticTimeout = setTimeout(() => {
      setStaticTyped(true);
    }, 2000);

    return () => clearTimeout(staticTimeout);
  }, []);

  useEffect(() => {
    if (staticTyped) {
      const dynamicInterval = setInterval(() => {
        const currentDynamicText = dynamicTexts[dynamicTextIndex];
        if (dynamicTextTyped.length < currentDynamicText.length) {
          setDynamicTextTyped((prevText) =>
            currentDynamicText.substring(0, prevText.length + 1)
          );
        } else {
          clearInterval(dynamicInterval);
          setTimeout(() => {
            setDynamicTextIndex((dynamicTextIndex + 1) % dynamicTexts.length);
            setDynamicTextTyped("");
          }, 1000);
        }
      }, 70);
      return () => clearInterval(dynamicInterval);
    }
  }, [staticTyped, dynamicTextIndex, dynamicTextTyped, dynamicTexts]);

  return (
    <div>
      <span className="typing-text">{staticText}</span>
      {staticTyped && <span className="typing-text">{dynamicTextTyped}</span>}
    </div>
  );
};

export default TypingText;
