"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e: MouseEvent) => {
      el.style.left    = `${e.clientX}px`;
      el.style.top     = `${e.clientY}px`;
      el.style.opacity = "1";
    };
    const hide = () => { el.style.opacity = "0"; };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="cursor-glow opacity-0"
      style={{ position: "fixed", pointerEvents: "none", zIndex: 0 }}
    />
  );
}
