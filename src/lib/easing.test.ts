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
    const quint = cubicBezier(easingPresets["out-quint"].bezier);
    for (const x of [0.1, 0.3, 0.5, 0.7, 0.9]) {
      expect(quint(x)).toBeCloseTo(1 - (1 - x) ** 5, 1);
    }
  });

  test("overshoots for out-back", () => {
    const back = cubicBezier(easingPresets["out-back"].bezier);
    expect(Math.max(...[0.6, 0.7, 0.8].map(back))).toBeGreaterThan(1);
  });
});
