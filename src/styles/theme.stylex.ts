import * as stylex from "@stylexjs/stylex";

export const colors = stylex.defineVars({
  background: "#fafafa",
  foreground: "#111111",
  secondary: "#616161",
  tertiary: "#9e9e9e",
  border: "#e2e2e2",
  accent: "#15803d",
});

export const lightTheme = stylex.createTheme(colors, {
  background: "#fafafa",
  foreground: "#111111",
  secondary: "#616161",
  tertiary: "#9e9e9e",
  border: "#e2e2e2",
  accent: "#15803d",
});

export const darkTheme = stylex.createTheme(colors, {
  background: "#000000",
  foreground: "#ededed",
  secondary: "#8f8f8f",
  tertiary: "#5c5c5c",
  border: "#1e1e1e",
  accent: "#4ade80",
});
