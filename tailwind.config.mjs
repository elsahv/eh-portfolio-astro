/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        munsell: "#0792a5",
        cerulean: "#007ba5",
        onyx: "#313638",
        aquamarine: "#7FFFD4",
        parchment: "#f0ead2",
        rosyBrown: "#B18D9B",
        test1: "#f88379",
        test2: "lightgreen",
      },
    },
  },
  plugins: [],
};
