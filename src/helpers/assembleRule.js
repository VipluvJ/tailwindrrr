import { dictionary } from "../dictionary.js";

const assembleRule = (selector, cssRule, variant) => {
  let finalSelector = selector;
  let wrapperStart = "";
  let wrapperEnd = "";
  if (variant) {
    const variantModifier = dictionary.variants[variant];
    if (!variantModifier) return null;
    if (variantModifier.startsWith("@media")) {
      wrapperStart = `${variantModifier} {`;
      wrapperEnd = `}`;
    } else {
      finalSelector += variantModifier;
    }
  }
  return `${wrapperStart}${finalSelector}{${cssRule};}${wrapperEnd}`;
};

export default assembleRule;
