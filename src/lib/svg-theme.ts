export type SvgTheme = "light" | "dark";

const darkSchemeQuery = /@media\s*\(prefers-color-scheme:\s*dark\)/;

export function applySvgTheme(svg: string, theme: SvgTheme) {
  let themedSvg = svg;
  let match = themedSvg.match(darkSchemeQuery);

  while (match?.index !== undefined) {
    const queryStart = match.index;
    const blockStart = themedSvg.indexOf("{", queryStart + match[0].length);
    if (blockStart === -1) break;

    let depth = 1;
    let index = blockStart + 1;
    for (; index < themedSvg.length && depth > 0; index += 1) {
      if (themedSvg[index] === "{") depth += 1;
      if (themedSvg[index] === "}") depth -= 1;
    }
    if (depth !== 0) break;

    const blockEnd = index - 1;
    const darkRules = themedSvg.slice(blockStart + 1, blockEnd);
    themedSvg =
      themedSvg.slice(0, queryStart) +
      (theme === "dark" ? darkRules : "") +
      themedSvg.slice(blockEnd + 1);
    match = themedSvg.match(darkSchemeQuery);
  }

  return themedSvg;
}
