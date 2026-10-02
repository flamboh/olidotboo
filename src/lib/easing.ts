export interface EasingPreset {
  label: string;
  bezier: readonly [number, number, number, number];
  duration: number;
}

export const easingPresets = {
  "in-out-cubic": {
    label: "in-out cubic (original)",
    bezier: [0.65, 0, 0.35, 1],
    duration: 520,
  },
  "in-out-sine": {
    label: "in-out sine (gentler)",
    bezier: [0.37, 0, 0.63, 1],
    duration: 520,
  },
  "in-out-quart": {
    label: "in-out quart (punchier)",
    bezier: [0.76, 0, 0.24, 1],
    duration: 600,
  },
  "quick-in-long-out": {
    label: "quick start, long settle",
    bezier: [0.5, 0, 0.1, 1],
    duration: 600,
  },
  standard: {
    label: "material standard",
    bezier: [0.4, 0, 0.2, 1],
    duration: 520,
  },
  emphasized: {
    label: "material emphasized",
    bezier: [0.2, 0, 0, 1],
    duration: 600,
  },
  "out-expo": {
    label: "out expo (current)",
    bezier: [0.16, 1, 0.3, 1],
    duration: 800,
  },
} satisfies Record<string, EasingPreset>;

export type EasingName = keyof typeof easingPresets;

export const defaultEasing: EasingName = "out-expo";

export const durationOptions = [400, 520, 600, 700, 800] as const;

export function isEasingName(value: string | null): value is EasingName {
  return value !== null && Object.hasOwn(easingPresets, value);
}

export function cssEasing([x1, y1, x2, y2]: EasingPreset["bezier"]) {
  return `cubic-bezier(${x1}, ${y1}, ${x2}, ${y2})`;
}

export function cubicBezier([x1, y1, x2, y2]: EasingPreset["bezier"]) {
  const curve = (a: number, b: number, t: number) =>
    3 * a * (1 - t) ** 2 * t + 3 * b * (1 - t) * t ** 2 + t ** 3;
  const slope = (a: number, b: number, t: number) =>
    3 * a * (1 - t) ** 2 + 6 * (b - a) * (1 - t) * t + 3 * (1 - b) * t ** 2;

  return (x: number) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) {
      const error = curve(x1, x2, t) - x;
      if (Math.abs(error) < 1e-6) break;
      const d = slope(x1, x2, t);
      if (Math.abs(d) < 1e-6) break;
      t -= error / d;
    }
    let low = 0;
    let high = 1;
    while (Math.abs(curve(x1, x2, t) - x) > 1e-6 && high - low > 1e-7) {
      t = (low + high) / 2;
      if (curve(x1, x2, t) < x) low = t;
      else high = t;
    }
    return curve(y1, y2, t);
  };
}
