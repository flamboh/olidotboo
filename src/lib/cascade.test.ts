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

  test("moves every artist in a cycle together", () => {
    expect(cascadeDelays(["a", "b", "c"], ["b", "a", "c"], 100)).toEqual(
      new Map([
        ["b", 0],
        ["a", 0],
        ["c", 0],
      ]),
    );

    const delays = cascadeDelays(
      [
        "Jane Remover",
        "Lucy Bedroque",
        "Charli xcx",
        "Slayr",
        "underscores",
        "brakence",
        "Tinashe",
        "Funeral",
      ],
      [
        "Lucy Bedroque",
        "Tinashe",
        "Charli xcx",
        "Jane Remover",
        "beabadoobee",
        "brakence",
        "Slayr",
        "underscores",
      ],
      100,
    );

    expect(Object.fromEntries(delays)).toEqual({
      "Lucy Bedroque": 0,
      Tinashe: 0,
      "Charli xcx": 0,
      "Jane Remover": 0,
      beabadoobee: 100,
      brakence: 0,
      Slayr: 0,
      underscores: 0,
    });
  });
});
