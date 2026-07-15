import { describe, expect, test } from "bun:test";

import { applySvgTheme } from "./svg-theme";

const adaptiveSvg = `<svg xmlns="http://www.w3.org/2000/svg">
  <style>
    .day { fill: #eeeeee; }
    @media (prefers-color-scheme: dark) {
      .day { fill: #111111; }
    }
  </style>
</svg>`;

describe("applySvgTheme", () => {
  test("makes light colors independent of the device theme", () => {
    const svg = applySvgTheme(adaptiveSvg, "light");

    expect(svg).toContain(".day { fill: #eeeeee; }");
    expect(svg).not.toContain("prefers-color-scheme");
    expect(svg).not.toContain("#111111");
  });

  test("makes dark colors independent of the device theme", () => {
    const svg = applySvgTheme(adaptiveSvg, "dark");

    expect(svg).toContain(".day { fill: #111111; }");
    expect(svg).not.toContain("prefers-color-scheme");
  });
});
