import React, { useState, useEffect } from "react";
import "./TypingEffect.css"; // CSS 파일

function TypingEffect({ text }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100); // 100ms 간격
      return () => clearTimeout(timer); // 클린업
    }
  }, [index, text]);

  return (
    <h3 className="typing-text">
      {displayText}
      <span className="cursor"></span>
    </h3>
  );
}
export default TypingEffect;
