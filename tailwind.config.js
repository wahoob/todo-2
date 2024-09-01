/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: "#F2F2F2",
          text: "#D9D9D9",
          muted: "#808080",
          border: "#333333",
          background: "#1A1A1A",
          ["div-background"]: "#262626",
          ["dark-border"]: "#0D0D0D",
          ["scroll-bar"]: "#6a6a6a",
        },
        tertiary: {
          DEFAULT: "#4EA8DE",
          background: "#1E6F9F",
        },
        quaternary: {
          DEFAULT: "#8284FA",
          background: "#5E60CE",
        },
      },
      fontFamily: {
        inter: ["Inter"],
      },
      boxShadow: {
        div: "0px 2px 8px 0px #0000000F",
      },
    },
  },
  plugins: [],
};
