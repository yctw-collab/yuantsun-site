import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: "#05261D",
          900: "#0B3327",
          800: "#0F3D2E",
          700: "#14513D",
          600: "#1F6F50",
          100: "#E8F3EE",
        },
      },
    },
  },
  plugins: [],
};

export default config;