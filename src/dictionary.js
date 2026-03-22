export const dictionary = {
  // 1. STATIC UTILITIES
  // One-to-one mappings. No parsing required.
  // If the engine sees this exact string, it outputs this exact CSS.
  static: {
    flex: "display: flex",
    block: "display: block",
    hidden: "display: none",
    absolute: "position: absolute",
    relative: "position: relative",
    "w-full": "width: 100%",
    "h-full": "height: 100%",
  },

  // 2. DYNAMIC PROPERTIES (The Prefixes)
  // Maps the class prefix to the actual CSS property name.
  // The Generator automatically sorts these by length, so 'flex-shrink'
  // safely evaluates before 'flex'.
  properties: {
    p: "padding",
    px: "padding-inline", // Modern logical property for left/right
    py: "padding-block", // Modern logical property for top/bottom
    m: "margin",
    bg: "background-color",
    text: "color",
    w: "width",
    h: "height",
    rounded: "border-radius",
    "flex-shrink": "flex-shrink",
    "flex-grow": "flex-grow",
    flex: "flex",
  },

  // 3. DESIGN TOKENS (The Suffixes)
  // Your actual design system scales. When the engine slices off a prefix,
  // it looks in here to find the matching value for the suffix.
  tokens: {
    spacing: {
      0: "0px",
      1: "0.25rem",
      2: "0.5rem",
      4: "1rem",
      8: "2rem",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "var(--color-primary, #3b82f6)",
      "primary-500": "#3b82f6",
      "red-500": "#ef4444",
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      none: "none",
    },
    borderRadius: {
      sm: "0.125rem",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
    },
  },

  // 4. VARIANTS (The Modifiers)
  // Defines how to wrap the CSS rule when a prefix like 'hover:' is used.
  variants: {
    hover: ":hover",
    focus: ":focus",
    active: ":active",
    // Media queries are flagged with '@media' so the Generator knows
    // to wrap the entire rule in a block rather than appending a pseudo-class.
    sm: "@media (min-width: 640px)",
    md: "@media (min-width: 768px)",
    lg: "@media (min-width: 1024px)",
  },
};
