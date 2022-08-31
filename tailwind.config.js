module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        light: {
          primary: "#006A6F",
          bgPrimary: "#FFFFFF",
          bgSecondary: "#F3F7F9",
          content: "#202D50",
          contentSecondary: "#484B55",
        },
        dark: {
          primary: "#00B7BF",
          bgPrimary: "#1F2028",
          bgSecondary: "#2E3039",
          content: "#FEFEFE",
          formLabels: "#eaeaea",
          contentSecondary: "#E5e5e5",
        },
        shade: "#F3F7F9",
      },
      fontFamily: {
        sans: [
          // "Poppins",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
