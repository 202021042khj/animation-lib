"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AnimatedText: () => AnimatedText
});
module.exports = __toCommonJS(index_exports);

// src/components/AnimatedText.tsx
var import_react = __toESM(require("react"));

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
var import_framer_motion = require("framer-motion");
var import_jsx_runtime = require("react/jsx-runtime");
var Fade = ({ children, delay }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_framer_motion.motion.span,
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
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Slide = ({ children, delay }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_framer_motion2.motion.span,
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
var import_jsx_runtime3 = require("react/jsx-runtime");
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
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Fade, { delay, children: unit }, key);
    }
    if (preset === "slide") {
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Slide, { delay, children: unit }, key);
    }
    return unit;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { display: "inline-block" }, children: lines.map((line, lineIndex) => {
    const units = split === "line" ? [line] : splitText(line, split);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { display: "block" }, children: units.map((unit, unitIndex) => {
      const totalDelay = (startDelay != null ? startDelay : 0) + lineIndex * lineStagger + unitIndex * unitStagger;
      const key = `${lineIndex}-${unitIndex}`;
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_react.default.Fragment, { children: [
        renderUnit(unit, totalDelay, key),
        split === "word" && " "
      ] }, key);
    }) }, lineIndex);
  }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnimatedText
});
//# sourceMappingURL=index.js.map