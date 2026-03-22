import scanElement from "./helpers/scanElement.js";

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === "childList") {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          scanElement(node);
          node.querySelectorAll("*").forEach(scanElement);
        }
      });
    } else if (
      mutation.type === "attributes" &&
      mutation.attributeName === "class"
    ) {
      // Existing element's class changed
      scanElement(mutation.target);
    }
  });
});

export default observer;
