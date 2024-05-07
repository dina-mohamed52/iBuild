/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function useTypedEffect(text, speed) {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let currentCharacterIndex = 0;
    let timer;

    const typeNextCharacter = () => {
      if (currentCharacterIndex < text.length) {
        setTypedText(text.slice(0, currentCharacterIndex + 1));
        currentCharacterIndex++;
        timer = setTimeout(typeNextCharacter, speed);
      } else {
        clearTimeout(timer);
      }
    };

    timer = setTimeout(typeNextCharacter, speed);

    return () => clearTimeout(timer);
  }, [text, speed]);

  return typedText;
}

function TypedText({ text, speed }) {
  const typedText = useTypedEffect(text, speed);

  return <span>{typedText}</span>;
}

export default TypedText;
