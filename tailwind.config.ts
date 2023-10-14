import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        montserrat: "var(--font-montserrat)",
      },
      screens: {
        xsm: "360px",
      },
      colors: {
        primary: "#3F3849",
        secondary: "#CBC5D3",
        brand: {
          blue: {
            100: "#F2F1F4",
            300: "#D2F5FE",
          },
          gray: {
            100: "#F7F6F8",
            300: "#F0F0F0",
            400: "#726E7C",
            600: "#CBC5D3",
          },
          pink: {
            300: "#FFEEEB",
            400: "#FFC6BC",
            500: "#FFE0C4",
          },
          purple: {
            "300": "#EEE0FF",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
