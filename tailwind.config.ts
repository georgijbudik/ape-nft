import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      messinaSans: ["var(--font-messina-sans)"],
      biroScript: ["var(--font-biro-script)"],
      biroScriptUS: ["var(--font-biro-script-us)"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "72px",
        md: "88px",
        lg: "120px",
      },
      screens: {
        sm: "360px",
        md: "768px",
        lg: "1280px",
      },
    },
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1280px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
