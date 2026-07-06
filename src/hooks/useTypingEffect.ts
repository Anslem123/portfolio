"use client";

import { useState, useEffect } from "react";

interface UseTypingEffectOptions {
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function useTypingEffect(
  strings: readonly string[],
  { speed = 60, deleteSpeed = 35, pauseDuration = 2000 }: UseTypingEffectOptions = {}
): string {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex,  setStringIndex]  = useState(0);
  const [charIndex,    setCharIndex]    = useState(0);
  const [isDeleting,   setIsDeleting]   = useState(false);
  const [isPaused,     setIsPaused]     = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const current = strings[stringIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((i) => i + 1);
        } else {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((i) => i - 1);
        } else {
          setIsDeleting(false);
          setStringIndex((i) => (i + 1) % strings.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timeout);
  }, [strings, stringIndex, charIndex, isDeleting, isPaused, speed, deleteSpeed, pauseDuration]);

  return displayText;
}
