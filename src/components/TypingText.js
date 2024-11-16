"use client";
import { useState, useEffect } from "react";

export default function TypingText() {
  const [text, setText] = useState("");
  const fullText = "A NEW ELECTRONIC BLEND IS RISING. STAY TUNED.";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return <p className="typing-text">{text}</p>;
}