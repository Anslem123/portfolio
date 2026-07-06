export const COLORS = {
  primary:       "#6C63FF",
  primaryLight:  "#8B84FF",
  primaryDark:   "#5046E5",
  accent:        "#22D3EE",
  accentLight:   "#67E8F9",
  success:       "#34D399",
  warning:       "#FBBF24",
  error:         "#F87171",

  // Opacities used for glassmorphism / tints
  primaryAlpha: {
    4:   "rgba(108, 99, 255, 0.04)",
    8:   "rgba(108, 99, 255, 0.08)",
    10:  "rgba(108, 99, 255, 0.10)",
    12:  "rgba(108, 99, 255, 0.12)",
    15:  "rgba(108, 99, 255, 0.15)",
    20:  "rgba(108, 99, 255, 0.20)",
    25:  "rgba(108, 99, 255, 0.25)",
    30:  "rgba(108, 99, 255, 0.30)",
  },
  accentAlpha: {
    8:   "rgba(34, 211, 238, 0.08)",
    10:  "rgba(34, 211, 238, 0.10)",
    25:  "rgba(34, 211, 238, 0.25)",
  },
} as const;

export const SHADOWS = {
  glowPrimary:      `0 0 40px ${COLORS.primaryAlpha[20]}`,
  glowPrimaryHover: `0 0 30px rgba(108, 99, 255, 0.50)`,
  cardHover:        `0 12px 48px rgba(108, 99, 255, 0.12)`,
  cardSubtle:       `0 4px 24px rgba(108, 99, 255, 0.08)`,
  headerButton:     `0 0 15px rgba(108, 99, 255, 0.25)`,
} as const;

export const RADIUS = {
  sm:   "6px",
  md:   "10px",
  lg:   "16px",
  xl:   "24px",
  full: "9999px",
} as const;
