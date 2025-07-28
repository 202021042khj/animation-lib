// src/components/AnimatedText.tsx
import React from "react";

// src/utils/splitter.ts
function splitText(text, type) {
  if (type === "character") {
    return text.split("").map((char) => char === " " ? "\xA0" : char);
  }
  if (type === "word") return text.split(" ");
  if (type === "line") return text.split("\n");
  return [text];
}

// src/presets/Fade.tsx
import { motion } from "framer-motion";
import { jsx } from "react/jsx-runtime";
var Fade = ({ children, delay }) => {
  return /* @__PURE__ */ jsx(
    motion.span,
    {
      style: { display: "inline-block" },
      initial: { opacity: 0, y: 3 },
      animate: { opacity: 1, y: 0 },
      transition: {
        delay,
        // ✅ 이제 딜레이 계산 안함, 전달받은 값만 사용
        duration: 0.8,
        ease: "easeOut"
      },
      children
    }
  );
};

// src/presets/Slide.tsx
import { motion as motion2 } from "framer-motion";
import { jsx as jsx2 } from "react/jsx-runtime";
var Slide = ({ children, delay }) => {
  return /* @__PURE__ */ jsx2(
    motion2.span,
    {
      style: { display: "inline-block" },
      initial: { opacity: 0, y: 3 },
      animate: { opacity: 1, y: 0 },
      transition: {
        delay,
        // ✅ 이제 딜레이 계산 안함, 전달받은 값만 사용
        duration: 0.8,
        ease: "easeOut"
      },
      children
    }
  );
};

// src/components/AnimatedText.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var AnimatedText = ({
  text,
  preset = "fade",
  split = "character",
  unitStagger = 0.03,
  lineStagger = 0.5,
  startDelay = 0
}) => {
  const lines = splitText(text, "line");
  const renderUnit = (unit, delay, key) => {
    if (preset === "fade") {
      return /* @__PURE__ */ jsx3(Fade, { delay, children: unit }, key);
    }
    if (preset === "slide") {
      return /* @__PURE__ */ jsx3(Slide, { delay, children: unit }, key);
    }
    return unit;
  };
  return /* @__PURE__ */ jsx3("span", { style: { display: "inline-block" }, children: lines.map((line, lineIndex) => {
    const units = split === "line" ? [line] : splitText(line, split);
    return /* @__PURE__ */ jsx3("span", { style: { display: "block" }, children: units.map((unit, unitIndex) => {
      const totalDelay = (startDelay != null ? startDelay : 0) + lineIndex * lineStagger + unitIndex * unitStagger;
      const key = `${lineIndex}-${unitIndex}`;
      return /* @__PURE__ */ jsxs(React.Fragment, { children: [
        renderUnit(unit, totalDelay, key),
        split === "word" && " "
      ] }, key);
    }) }, lineIndex);
  }) });
};
export {
  AnimatedText
};
//# sourceMappingURL=index.mjs.map