export type SplitType = "character" | "word" | "line";

export function splitText(text: string, type: SplitType): string[] {
  if (type === "character") {
    return text.split("").map((char) => (char === " " ? "\u00A0" : char));
  }
  if (type === "word") return text.split(" ");
  if (type === "line") return text.split("\n");
  return [text];
}
