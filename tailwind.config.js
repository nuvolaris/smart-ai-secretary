/** @type {import('tailwindcss').Config} */
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      primary: "#1b81a5",
      secondary: "#ffa944",
    },
    fontFamily: {
      arista: ["Courier New", "monospace"]
    },
    extend: {}
  },
  plugins: []
};
