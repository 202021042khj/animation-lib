import React from 'react';

type SplitType = "character" | "word" | "line";

type PresetType = "fade" | "slide";
interface AnimatedTextProps {
    text: string;
    preset?: PresetType;
    split?: SplitType;
    unitStagger?: number;
    lineStagger?: number;
    startDelay?: number;
}
declare const AnimatedText: React.FC<AnimatedTextProps>;

export { AnimatedText };
