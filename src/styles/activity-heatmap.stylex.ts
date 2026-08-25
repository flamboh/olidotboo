import * as stylex from "@stylexjs/stylex";

import { colors } from "./theme.stylex";

export const styles = stylex.create({
  source: {
    marginTop: "1rem",
  },

  sourceSpaced: {
    marginTop: "1.25rem",
  },

  sourceLabel: {
    marginBottom: "0.375rem",
    color: colors.tertiary,
    fontSize: "0.6875rem",
    fontWeight: 500,
    letterSpacing: "0.14em",
  },

  heatmap: {
    display: "block",
    position: "relative",
    overflowX: "auto",
    overflowY: "hidden",
    ":focus-visible": {
      borderRadius: 2,
      outline: "2px solid",
      outlineColor: colors.accent,
      outlineOffset: 2,
    },
    "::-webkit-scrollbar": {
      height: 6,
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: colors.border,
      borderRadius: 3,
      ":hover": {
        backgroundColor: colors.tertiary,
      },
    },
  },

  imageFrame: {
    display: "block",
    width: 686,
    maxWidth: "100%",
    height: "auto",
    borderRadius: 4,
  },

  image: {
    opacity: 0,
    transition: "opacity 0.3s ease",
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },

  imageVisible: {
    opacity: 1,
  },

  ghost: {
    position: "absolute",
    top: 0,
    left: 0,
    pointerEvents: "none",
    transition: "opacity var(--crossfade) ease",
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
  },

  ghostFading: {
    opacity: 0,
  },

  summary: {
    marginTop: "0.375rem",
    minHeight: "1.65em",
    color: colors.tertiary,
    fontSize: "0.75rem",
    lineHeight: 1.65,
    visibility: "hidden",
    opacity: 0,
    transition: "opacity 0.18s ease",
    "@media (prefers-reduced-motion: reduce)": {
      transition: "none",
    },
    "@media (max-width: 520px)": {
      minHeight: "3.3em",
    },
  },

  summaryVisible: {
    visibility: "visible",
    opacity: 1,
  },
});
