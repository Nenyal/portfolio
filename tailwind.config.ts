import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/assets/background.svg')",
      },
      spacing: {
        "1/7": "14.285714%",
        "1/6": "16.666667%",
        "1/5": "20%",
        "1/4": "25%",
        "1/3": "33.333333%",
      },
      colors: {
        cyan: {
          bg: "#EAF4FB",
        },
        darkblue: {
          buttonbg: "#053C5F",
          buttonhover: "#032840",
        },
      },
    },
  },
  plugins: [],
};
export default config;
