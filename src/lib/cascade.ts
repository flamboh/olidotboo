export function cascadeDelays(
  before: readonly string[],
  after: readonly string[],
  step: number,
) {
  const delays = new Map<string, number>();

  function occupantOf(name: string) {
    const occupant = before[after.indexOf(name)];
    return occupant !== undefined &&
      occupant !== name &&
      after.includes(occupant)
      ? occupant
      : undefined;
  }

  after.forEach((name) => {
    const path: string[] = [];
    let current: string | undefined = name;
    while (
      current !== undefined &&
      !delays.has(current) &&
      !path.includes(current)
    ) {
      path.push(current);
      current = occupantOf(current);
    }

    let delay = -step;
    if (current !== undefined && delays.has(current)) {
      delay = delays.get(current)!;
    } else if (current !== undefined) {
      path.splice(path.indexOf(current)).forEach((member) => {
        delays.set(member, 0);
      });
      delay = 0;
    }

    path.reverse().forEach((member) => {
      delay += step;
      delays.set(member, delay);
    });
  });

  return delays;
}
