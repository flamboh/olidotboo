import { describe, expect, test } from "bun:test";

import { cubicBezier, easingPresets } from "./easing";

describe("cubicBezier", () => {
  test("hits both endpoints", () => {
    for (const preset of Object.values(easingPresets)) {
      const ease = cubicBezier(preset.bezier);
      expect(ease(0)).toBe(0);
      expect(ease(1)).toBe(1);
    }
  });

  test("matches the curve it approximates", () => {
    const quart = cubicBezier(easingPresets["in-out-quart"].bezier);
    for (const x of [0.1, 0.3, 0.5, 0.7, 0.9]) {
      const exact = x < 0.5 ? 8 * x ** 4 : 1 - (-2 * x + 2) ** 4 / 2;
      expect(quart(x)).toBeCloseTo(exact, 1);
    }
  });
});
