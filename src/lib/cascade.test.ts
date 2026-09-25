import { describe, expect, test } from "bun:test";

import { cascadeDelays } from "./cascade";

describe("cascadeDelays", () => {
  test("chains moves back from the artist who leaves", () => {
    const delays = cascadeDelays(
      ["Lucy Bedroque", "Jane Remover", "Charli xcx", "underscores"],
      ["Lucy Bedroque", "Charli xcx", "beabadoobee", "Jane Remover"],
      100,
    );

    expect(Object.fromEntries(delays)).toEqual({
      "Lucy Bedroque": 0,
      "Jane Remover": 0,
      "Charli xcx": 100,
      beabadoobee: 200,
    });
  });

  test("starts artists entering an emptied or new slot right away", () => {
    const delays = cascadeDelays(
      ["Lucy Bedroque", "Jane Remover", "Charli xcx", "underscores"],
      ["Lucy Bedroque", "Natanya", "Che", "underscores"],
      100,
    );

    expect(Object.fromEntries(delays)).toEqual({
      "Lucy Bedroque": 0,
      Natanya: 0,
      Che: 0,
      underscores: 0,
    });
    expect(cascadeDelays([], ["a", "b"], 100)).toEqual(
      new Map([
        ["a", 0],
        ["b", 0],
      ]),
    );
  });

  test("breaks a swap so one artist leads the other", () => {
    const delays = cascadeDelays(["a", "b", "c"], ["b", "a", "c"], 100);

    expect([...delays.values()].sort()).toEqual([0, 0, 100]);
    expect(delays.get("c")).toBe(0);
  });
});
