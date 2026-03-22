import injector from "../injector.js";

const scanElement = (element) => {
  // Use getAttribute to safely handle SVGs as well as standard HTML elements
  const classNameAttr = element.getAttribute("class");
  if (!classNameAttr) return;

  // Split by any whitespace and process
  const classes = classNameAttr.trim().split(/\s+/);
  classes.forEach((className) => {
    if (className) injector(className);
  });
};

export default scanElement;
