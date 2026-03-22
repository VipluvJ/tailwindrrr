import observer from "./observer.js";
import scanElement from "./helpers/scanElement.js";

const startEngine = () => {
  if (typeof document === "undefined") return; // Guard for SSR environments

  document.querySelectorAll("*").forEach(scanElement);

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });
};

export default startEngine;
