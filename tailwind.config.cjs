const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      }
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {

          "secondary": "#e62020",
          "primary": "#7dc155",
          "accent": "#f78e1d",
          "neutral": "#1c1917",
          "base-100": "#fff",
          "info": "#7dd3fc",
          "success": "#86efac",
          "warning": "#fde047",
          "error": "#f87171",
        },
      },
    ],
  },
  
  plugins: [require("daisyui")]
};

module.exports = config;
