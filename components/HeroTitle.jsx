"use client";

import { useEffect, useState } from "react";

const TITLE = "Создаю цифровые интерфейсы, которые интуитивны и функциональны";
const SCRAMBLE_CHARS = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
const TOTAL_FRAMES = 24;
const FRAME_MS = 35;

/**
 * Homepage headline: on mount, the text "decrypts" from random Cyrillic
 * characters into the real string, revealing left to right over ~0.8s.
 * The real text stays in the DOM via aria-label so screen readers never
 * see the scramble.
 */
export default function HeroTitle() {
  const [display, setDisplay] = useState(TITLE);

  useEffect(() => {
    let frame = 0;
    const revealStep = TITLE.length / TOTAL_FRAMES;

    const interval = setInterval(() => {
      frame += 1;
      const revealCount = Math.floor(frame * revealStep);
      const next = TITLE.split("")
        .map((ch, i) => {
          if (ch === " " || ch === ",") return ch;
          if (i < revealCount) return TITLE[i];
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join("");
      setDisplay(next);

      if (frame >= TOTAL_FRAMES) {
        setDisplay(TITLE);
        clearInterval(interval);
      }
    }, FRAME_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1
      aria-label={TITLE}
      className="text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.15] font-medium tracking-tight"
    >
      <span aria-hidden="true">{display}</span>
    </h1>
  );
}
