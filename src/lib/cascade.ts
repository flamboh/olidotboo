export function cascadeDelays(
  before: readonly string[],
  after: readonly string[],
  step: number,
) {
  const delays = new Map<string, number>();
  const visiting = new Set<string>();

  function delayOf(name: string): number {
    const known = delays.get(name);
    if (known !== undefined) return known;

    const occupant = before[after.indexOf(name)];
    let delay = 0;
    if (
      occupant !== undefined &&
      occupant !== name &&
      after.includes(occupant) &&
      !visiting.has(occupant)
    ) {
      visiting.add(name);
      delay = delayOf(occupant) + step;
      visiting.delete(name);
    }
    delays.set(name, delay);
    return delay;
  }

  after.forEach(delayOf);
  return delays;
}
