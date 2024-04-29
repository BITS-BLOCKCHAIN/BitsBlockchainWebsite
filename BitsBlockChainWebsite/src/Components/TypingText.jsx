import React, { useState, useEffect } from "react";
import "../Css/Typing.css";

const TypingText = ({ dynamicTexts }) => {
    const staticText = "Welcome to";

    const [staticTextTyped, setStaticTextTyped] = useState("");
    const [isStaticTextComplete, setIsStaticTextComplete] = useState(false);
    const [dynamicTextIndex, setDynamicTextIndex] = useState(0);
    const [dynamicTextTyped, setDynamicTextTyped] = useState("");

    useEffect(() => {
        if (!isStaticTextComplete) {
            const interval = setInterval(() => {
                if (staticTextTyped.length < staticText.length) {
                    setStaticTextTyped(staticText.substring(0, staticTextTyped.length + 1));
                } else {
                    clearInterval(interval);
                    setIsStaticTextComplete(true);
                }
            }, 100);
            return () => clearInterval(interval);
        }
    }, [staticTextTyped, isStaticTextComplete, staticText]);

    useEffect(() => {
        if (isStaticTextComplete) {
            const interval = setInterval(() => {
                const currentDynamicText = dynamicTexts[dynamicTextIndex];
                if (dynamicTextTyped.length < currentDynamicText.length) {
                    setDynamicTextTyped((prevText) =>
                        currentDynamicText.substring(0, prevText.length + 1)
                    );
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        setDynamicTextIndex((dynamicTextIndex + 1) % dynamicTexts.length);
                        setDynamicTextTyped("");
                    }, 1000);
                }
            }, 70);
            return () => clearInterval(interval);
        }
    }, [isStaticTextComplete, dynamicTextIndex, dynamicTextTyped, dynamicTexts]);

    return (
        <div className="parent-container mt-20 pb-20 pl-10 pr-10 pt-20 shadow-xl border-4 rounded-xl"
        style={{ borderColor: 'rgb(31 41 55)' }}>
         <video className="background-video" autoPlay loop muted>
                <source src='/images/backvideo.mp4' type="video/mp4" />
            </video>
            <div className="text-column">
                <div className="static-text ">
                    {staticTextTyped}
                </div>
                {isStaticTextComplete && (
                    <div className="typing-text">
                        {dynamicTextTyped}
                    </div>
                )}
            </div>
            <div className="image-column">
                <img src="/images/clockTower.png"  className="typing-image" />
            </div>
        </div>
    );
};

export default TypingText;

