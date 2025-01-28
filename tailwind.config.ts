import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./login/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#2B4836',
        grass: '#999E66',
        sand: '#BE8E66',
        sun: '#FFEFBC',
        orange: '#FFD700',
        pinkLady: '#E3A1AD',
        TextColour: "#242424",
        MenuColour: "#242424",
        background: "#FFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
