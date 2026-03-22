import { dictionary } from "./dictionary.js";
import assembleRule from "./helpers/assembleRule.js";

const sortedPrefixes = Object.keys(dictionary.properties).sort(
  (a, b) => b.length - a.length,
);

const generator = (className) => {
  let variantPrefix = "";
  let baseClass = className;
  if (className.includes(":")) {
    const parts = className.split(":");
    variantPrefix = parts[0];
    baseClass = parts.slice(1).join(":");
  }

  let escapedSelector;
  try {
    escapedSelector = `.${CSS.escape(className)}`;
  } catch (error) {
    return null;
  }
  if (dictionary.static[baseClass]) {
    return assembleRule(
      escapedSelector,
      dictionary.static[baseClass],
      variantPrefix,
    );
  }
  let property = "";
  let suffix = "";

  for (const prefix of sortedPrefixes) {
    if (baseClass.startsWith(`${prefix}-`)) {
      property = dictionary.properties[prefix];
      suffix = baseClass.slice(prefix.length + 1);
      break;
    }
  }
  if (!property) return null;

  let tokenValue = null;

  if (suffix.startsWith("[") && suffix.endsWith("]")) {
    tokenValue = suffix.slice(1, -1).replace(/_/g, " ");
  } else {
    for (const category in dictionary.tokens) {
      if (dictionary.tokens[category][suffix]) {
        tokenValue = dictionary.tokens[category][suffix];
      }
    }
  }

  if (!tokenValue) return null;

  let cssRule = `${property}:${tokenValue}`;
  return assembleRule(escapedSelector, cssRule, variantPrefix);
};

export default generator;
