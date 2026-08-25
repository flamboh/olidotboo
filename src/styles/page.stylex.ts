import * as stylex from "@stylexjs/stylex";

import { colors } from "./theme.stylex";

const pageEnter = stylex.keyframes({
  from: {
    opacity: 0,
    transform: "translateY(7px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

const themeFade = "var(--theme-fade)";

export const styles = stylex.create({
  lightScheme: {
    colorScheme: "light",
  },
  darkScheme: {
    colorScheme: "dark",
  },
  body: {
    backgroundColor: colors.background,
    color: colors.foreground,
    fontFamily:
      'ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace',
    fontSize: "0.875rem",
    lineHeight: 1.65,
    WebkitFontSmoothing: "antialiased",
    transitionDuration: themeFade,
    transitionProperty: "background-color, color",
    transitionTimingFunction: "ease",
  },
  main: {
    maxWidth: 760,
    marginInline: "auto",
    paddingBlockStart: "3.25rem",
    paddingInline: "1.25rem",
    paddingBlockEnd: "3.75rem",
    "@media (max-width: 640px)": {
      paddingBlockStart: "2rem",
      paddingBlockEnd: "3rem",
    },
  },
  enter: {
    animationName: pageEnter,
    animationDuration: "0.48s",
    animationTimingFunction: "cubic-bezier(0.22, 0.8, 0.25, 1)",
    animationFillMode: "both",
    "@media (prefers-reduced-motion: reduce)": {
      animationName: "none",
    },
  },
  enterContent: {
    animationDelay: "0.05s",
  },
  enterActivity: {
    animationDelay: "0.1s",
  },
  enterFooter: {
    animationDelay: "0.15s",
  },
  masthead: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "1rem",
  },
  heading: {
    fontSize: "1rem",
    fontWeight: 700,
  },
  pronouns: {
    color: colors.tertiary,
    fontSize: "0.75rem",
    fontWeight: 400,
  },
  tagline: {
    color: colors.secondary,
    marginTop: "0.375rem",
    textWrap: "balance",
  },
  button: {
    appearance: "none",
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    color: colors.secondary,
    cursor: "pointer",
    font: "inherit",
    padding: 0,
    transitionDuration: themeFade,
    transitionProperty: "color",
    transitionTimingFunction: "ease",
    ":hover": {
      color: colors.accent,
    },
  },
  contactLine: {
    color: colors.tertiary,
    display: "block",
    fontSize: "0.8125rem",
    marginTop: "0.125rem",
  },
  focusable: {
    ":focus-visible": {
      borderRadius: 2,
      outline: "2px solid",
      outlineColor: colors.accent,
      outlineOffset: 2,
    },
  },
  contentGrid: {
    display: "grid",
    gap: "2rem",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    marginTop: "1.75rem",
    "@media (max-width: 640px)": {
      gap: "2.75rem",
      gridTemplateColumns: "1fr",
    },
  },
  // Stretch both columns to the same height so their rows can share the
  // available space below the section label.
  contentColumn: {
    display: "flex",
    flexDirection: "column",
  },
  activity: {
    marginTop: "2.5rem",
  },
  label: {
    borderBottomColor: colors.border,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    color: colors.tertiary,
    fontSize: "0.6875rem",
    fontWeight: 500,
    letterSpacing: "0.14em",
    paddingBottom: "0.375rem",
    transitionDuration: themeFade,
    transitionProperty: "border-color",
    transitionTimingFunction: "ease",
  },
  // Keep a floor between entries while distributing extra column height with
  // space-between. The single-column mobile grid naturally collapses this.
  rows: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    gap: "1.125rem",
    justifyContent: "space-between",
    paddingTop: "1.125rem",
  },
  subheading: {
    fontSize: "0.875rem",
    fontWeight: 600,
  },
  link: {
    color: colors.foreground,
    textDecorationColor: colors.tertiary,
    textDecorationLine: "underline",
    textUnderlineOffset: 3,
    transitionDuration: themeFade,
    transitionProperty: "color, text-decoration-color",
    transitionTimingFunction: "ease",
    ":hover": {
      color: colors.accent,
      textDecorationColor: colors.accent,
    },
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 400,
  },
  experienceSubtitle: {
    display: "block",
  },
  description: {
    color: colors.secondary,
    fontSize: "0.8125rem",
    marginTop: "0.25rem",
    textWrap: "pretty",
  },
  footer: {
    borderTopColor: colors.border,
    borderTopStyle: "solid",
    borderTopWidth: 1,
    columnGap: "1.25rem",
    display: "flex",
    flexWrap: "wrap",
    fontSize: "0.8125rem",
    marginTop: "1.75rem",
    paddingTop: "1rem",
    rowGap: "0.5rem",
    transitionDuration: themeFade,
    transitionProperty: "border-color",
    transitionTimingFunction: "ease",
  },
  footerLink: {
    color: colors.secondary,
    textDecorationLine: "none",
  },
});
