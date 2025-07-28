import React from "react";
import { splitText, SplitType } from "../utils/splitter";
import { Fade } from "../presets/Fade";
import { Slide } from "../presets/Slide";

type PresetType = "fade" | "slide";

interface AnimatedTextProps {
  text: string;
  preset?: PresetType;
  split?: SplitType;
  unitStagger?: number;
  lineStagger?: number;
  startDelay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  preset = "fade",
  split = "character",
  unitStagger = 0.03,
  lineStagger = 0.5,
  startDelay = 0,
}) => {
  const lines = splitText(text, "line");

  const renderUnit = (unit: string, delay: number, key: string) => {
    if (preset === "fade") {
      return (
        <Fade key={key} delay={delay}>
          {unit}
        </Fade>
      );
    }
    if (preset === "slide") {
      return (
        <Slide key={key} delay={delay}>
          {unit}
        </Slide>
      );
    }
    return unit;
  };

  return (
    <span style={{ display: "inline-block" }}>
      {lines.map((line, lineIndex) => {
        const units = split === "line" ? [line] : splitText(line, split);
        return (
          <span key={lineIndex} style={{ display: "block" }}>
            {units.map((unit, unitIndex) => {
              const totalDelay =
                (startDelay ?? 0) +
                lineIndex * lineStagger +
                unitIndex * unitStagger;
              const key = `${lineIndex}-${unitIndex}`;
              return (
                <React.Fragment key={key}>
                  {renderUnit(unit, totalDelay, key)}
                  {split === "word" && " "}
                </React.Fragment>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};
