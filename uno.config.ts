// uno.config.js
import { defineConfig } from "unocss";
import transformerDirective from "@unocss/transformer-directives";
import { presetAttributify, presetUno } from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
  rules: [
    [
      /^(w|h)(p)?-(\d+)(i)?$/,
      ([, wh, p, d, i]) => {
        const key = wh === "w" ? "width" : "height";
        const value = `${d}${p ? "%" : "px"}`;
        const important = i ? "!important" : "";
        return {
          [key]: `${value} ${important}`,
        };
      },
    ],
    [
      /^b([r|t|b|l]?)-(\d+)-([a-z]+)$/,
      ([, p, d, c]) => {
        let prop = "border";
        switch (p) {
          case "t":
            prop += "-top";
            break;
          case "b":
            prop += "-bottom";
            break;
          case "l":
            prop += "-left";
            break;
          case "r":
            prop += "-right";
            break;
        }
        return { [prop]: `${d}px solid #${c}` };
      },
    ],
  ],
  shortcuts: {
    "f-jc": "flex justify-center",
    "f-jb": "flex justify-between",
    "f-ac": "flex items-center",
    "f-ac-jc": "flex items-center justify-center",
    "f-ac-jb": "flex items-center justify-between",
    "f-wb": "flex flex-wrap justify-between",
  },
  transformers: [transformerDirective() as any],
  presets: [
    presetAttributify(),
    presetUno(),
    presetRemToPx({ baseFontSize: 4 }),
  ],
});
