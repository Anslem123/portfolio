export const EASE = {
  smooth: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  spring: [0.34, 1.56, 0.64, 1]    as [number, number, number, number],
  sharp:  [0.12, 0, 0.39, 0]       as [number, number, number, number],
} as const;

export const DURATION = {
  fast:   0.15,
  base:   0.25,
  slow:   0.5,
  slower: 0.7,
} as const;

export const VIEWPORT_MARGIN = "-60px";

export const STAGGER = {
  children: 0.08,
  items:    0.06,
  fast:     0.04,
} as const;
