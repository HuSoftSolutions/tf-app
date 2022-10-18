/** @type {import('tailwindcss').Config} */
console.log('NODE ENV BELOW')
console.log(process.env.NODE_ENV)

const path =
  process.env.VITE_TEMPLATE === "base"
    ? "./tailwind/preset.cjs"
    : `./tailwind/${process.env.VITE_TEMPLATE}/preset.cjs`;

module.exports = {
  presets: [require(path)],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
};
