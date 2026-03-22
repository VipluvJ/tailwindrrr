import generator from "./generator.js";

const CACHE_LIMIT = 10000;

const generatedClasses = new Set();

const baseStyleElement = document.createElement("style");
baseStyleElement.id = "tailwindrrr-base";
document.head.appendChild(baseStyleElement);

const mediaStyleElement = document.createElement("style");
mediaStyleElement.id = "tailwindrrr-media";
document.head.appendChild(mediaStyleElement);

const baseSheet = baseStyleElement.sheet;
const mediaSheet = mediaStyleElement.sheet;

const injector = (classname) => {
  if (generatedClasses.has(classname)) return;

  if (generatedClasses.size > CACHE_LIMIT) {
    console.warn("Cache limit reached. Flushing memory.");
    generatedClasses.clear();
  }

  generatedClasses.add(classname);

  const cssString = generator(classname);

  if (cssString) {
    try {
      if (cssString.startsWith("@media")) {
        mediaSheet.insertRule(cssString, mediaSheet.cssRules.length);
      } else {
        baseSheet.insertRule(cssString, baseSheet.cssRules.length);
      }
    } catch (error) {
      console.warn(`Invalid CSS generated for: ${classname}`);
    }
  }
};

export default injector;
