module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        shake: "shake 0.5s linear infinite",
      },
      keyframes: {
        shake: {
          "0%": { transform: "translate(0px, 0px), rotate(0.7deg)" },
          "25%": { transform: " translate(0px, 0px) rotate(-0.7deg)" },
          "50% ": { transform: "translate(0px, 0px) rotate(0.7deg)" },
          "75%": { transform: "translate(0px, 0px) rotate(-0.7deg)" },
          "100%": { transform: "translate(0px, 0px) rotate(0.7deg)" },
        },
      },
    },

    boxShadow: {
      widget: "0 0 4px 4px #e1e1e1",
    },
    borderRadius: {
      widget: "1em",
    },
    fontSize: {
      normal: "20px",
    },
    textColor: {
      next: "#0070f3",
      bitcoin: "#fbb03b",
      white: "#ffffff",
    },
    height: {
      search: "40px",
    },
    maxWidth: {
      weather: "430px",
    },
    lineHeight: {
      middle: "100%",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
