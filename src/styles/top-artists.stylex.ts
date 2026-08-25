import * as stylex from "@stylexjs/stylex";

import { colors } from "./theme.stylex";

export const styles = stylex.create({
  root: {
    marginTop: "1.25rem",
  },
  header: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "1rem",
  },
  title: {
    flex: 1,
    fontSize: "0.6875rem",
    fontWeight: 500,
    letterSpacing: "0.14em",
    color: colors.tertiary,
    paddingBottom: "0.375rem",
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: colors.border,
    transition: "border-color var(--theme-fade) ease",
  },
  dropdown: {
    position: "relative",
    width: "calc(8ch + 0.625rem)",
    fontSize: "0.75rem",
  },
  trigger: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "0 0.3125rem 0.125rem",
    backgroundColor: colors.background,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid",
    borderBottomColor: colors.tertiary,
    borderLeftWidth: 0,
    color: colors.secondary,
    cursor: "pointer",
    font: "inherit",
    transition:
      "color var(--theme-fade) ease, background-color var(--theme-fade) ease, border-color var(--theme-fade) ease",
    ":hover": {
      color: colors.accent,
    },
    ":focus-visible": {
      borderRadius: 2,
      outline: "2px solid",
      outlineColor: colors.accent,
      outlineOffset: 2,
    },
  },
  viewport: {
    position: "absolute",
    zIndex: 2,
    top: "calc(100% - 1px)",
    right: "-1px",
    width: "calc(100% + 2px)",
    height: "6rem",
    overflow: "hidden",
    pointerEvents: {
      default: "none",
      '[data-open="true"]': "auto",
    },
    visibility: {
      default: "hidden",
      '[data-open="true"]': "visible",
    },
    transition: "visibility 0s linear",
    transitionDelay: {
      default: "0.34s",
      '[data-open="true"]': "0s",
    },
  },
  menu: {
    backgroundColor: colors.background,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: colors.border,
    borderTopWidth: 0,
    borderRadius: "0 0 4px 4px",
    transform: {
      default: "translateY(-100%)",
      '[data-open="true"]': "translateY(0)",
    },
    transition: {
      default:
        "transform 0.34s cubic-bezier(0.22, 0.8, 0.25, 1), background-color var(--theme-fade) ease, border-color var(--theme-fade) ease",
      "@media (prefers-reduced-motion: reduce)": "none",
    },
  },
  option: {
    display: "block",
    width: "100%",
    padding: "0.25rem",
    textAlign: "left",
    whiteSpace: "nowrap",
    borderRadius: "2px",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 0,
    cursor: "pointer",
    font: "inherit",
    backgroundColor: {
      default: "transparent",
      ":hover": colors.border,
    },
    color: {
      default: colors.secondary,
      ":hover": colors.accent,
      '[aria-current="true"]': colors.foreground,
    },
    transition:
      "color var(--theme-fade) ease, background-color var(--theme-fade) ease",
    ":focus-visible": {
      outline: "2px solid",
      outlineColor: colors.accent,
      outlineOffset: 2,
    },
  },
  content: {
    display: "grid",
    minHeight: "6.5rem",
    marginTop: "0.625rem",
    opacity: {
      default: 1,
      '[data-changing="true"]': 0,
    },
    transition: {
      default: "opacity 0.18s ease",
      "@media (prefers-reduced-motion: reduce)": "none",
    },
  },
  list: {
    gridArea: "1 / 1",
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "0.875rem 2rem",
    listStyle: "none",
  },
  artistItem: {
    minWidth: 0,
  },
  artistName: {
    display: "block",
    color: colors.foreground,
    textDecorationColor: colors.tertiary,
    textDecorationLine: "underline",
    textUnderlineOffset: 3,
    transition:
      "color var(--theme-fade) ease, text-decoration-color var(--theme-fade) ease",
    ":hover": {
      color: colors.accent,
      textDecorationColor: colors.accent,
    },
    ":focus-visible": {
      borderRadius: 2,
      outline: "2px solid",
      outlineColor: colors.accent,
      outlineOffset: 2,
    },
  },
  artistCount: {
    display: "block",
    marginTop: "0.125rem",
    color: colors.tertiary,
    fontSize: "0.75rem",
  },
  status: {
    gridArea: "1 / 1",
    placeSelf: "center",
    color: colors.tertiary,
    fontSize: "0.75rem",
  },
});
