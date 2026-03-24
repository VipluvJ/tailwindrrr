# tailwindrrr 🚀

A lightning-fast, zero-build-step, Just-In-Time (JIT) utility CSS engine that
runs entirely in the browser runtime.

**tailwindrrr** eliminates the need for complex build tools like Webpack,
PostCSS, or Vite plugins. Just drop it into your project, write utility classes
in your DOM, and watch your styles compile instantly via a highly optimized
`MutationObserver`.

---

## ✨ Features

- **Zero Configuration:** No `tailwind.config.js` or build steps required.
- **True JIT Compilation:** CSS is generated entirely on-demand. Unused CSS
  literally doesn't exist.
- **Browser Native:** Uses native DOM APIs and `CSS.escape()`.
- **Cascade Safe:** Automatically segregates base styles and media queries into
  separate injected `<style>` tags to mathematically guarantee responsive design
  cascade rules.
- **Memory Protected:** Built-in caching mechanisms prevent CPU string-parsing
  overhead and protect against infinite RAM leaks.

---

## 📦 Installation

```bash
npm install tailwindrrr


// main.js or index.js
import startEngine from 'tailwindrrr';

// Boot up the JIT engine!
startEngine();

// Now, just write HTML and the engine will style it instantly.
document.body.innerHTML = `
  <div class="p-8 md:p-16 bg-slate-900 text-white rounded-lg">
    <h1 class="text-2xl font-bold hover:text-primary-500">Engine is live!</h1>
  </div>
`;

// main.jsx or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import startEngine from 'tailwindrrr';

// 1. Boot up the engine
startEngine();

// 2. Render your application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

<div class="flex block hidden relative absolute w-full h-full">...</div>

<button class="bg-slate-200 hover:bg-slate-900 hover:text-white focus:border-primary-500">
  Hover me
</button>

<div class="bg-red-500 sm:bg-blue-500 md:bg-green-500 lg:bg-purple-500">
  Resize the browser!
</div>

<div class="w-[350px] border-[3px] grid-cols-[1fr_500px_2fr] z-[99]">...</div>

import startEngine, { dictionary } from 'tailwindrrr';

// Inspect available colors
console.log(dictionary.tokens.colors);

// Add a custom brand color to the runtime memory
dictionary.tokens.colors['brand-magic'] = '#ff0055';

// Now `<div class="bg-brand-magic">` will work perfectly!
startEngine();
```
