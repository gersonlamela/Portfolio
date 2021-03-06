module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  variants: {
    // ...
    scrollbar: ["dark"],
  },
  theme: {
    extend: {},
    fontFamily: {
      Inter: [
        '"Inter"',
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
    colors: {
      blue: "#00d2df",
      gradientPinkTo: "#6518b4",
      gradientPinkFrom: "#d24074",
      gradientPurpleFrom: "#9358f7",
      gradientPurpleTo: "#10d7e2",
      dark: "#121212",
      dark200: " #151515",
      graylight: "#c4c4c4",
      graydark: "#a1a1a1",
      light: "#ffffff",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
