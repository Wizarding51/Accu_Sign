/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightest: "#f5f5f5",
        white: "#fff",
        gray: {
          "100": "#777",
          "200": "#1d2145",
        },
        darkslategray: {
          "100": "#333c4c",
          "200": "#333",
        },
        "black-40": "rgba(0, 0, 0, 0.4)",
        light: "#dedede",
        "gray-5": "#e0e0e0",
        "grey-blue-97": "#f5f6f7",
        "grey-blue-90": "#dadee6",
        "gray-3": "#828282",
        "gray-2": "#4f4f4f",
        "grey-blue-75": "#99a6bf",
        "grey-blue-25": "#202b40",
        "natural-3": "#858688",
        whitesmoke: {
          "100": "#ececec",
          "200": "rgba(238, 238, 238, 0.6)",
        },
        "black-2": "#323335",
        "light-gray": "#fbfbfb",
        active: "rgba(0, 0, 0, 0.56)",
        lighter: "#ebebeb",
        secondary: "#909090",
        "brand-cyber": "#7f35b2",
        "gray-6": "#f2f2f2",
        base: "#bdbdbd",
      },
      spacing: {},
      fontFamily: {
        "medium-24": "Roboto",
        body: "Inter",
        "poppins-medium": "Poppins",
        sacramento: "Sacramento",
      },
      borderRadius: {
        "6xs-5": "6.5px",
      },
    },
    fontSize: {
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "11xl": "30px",
      lg: "18px",
      smi: "13px",
      base: "16px",
      sm: "14px",
      xs: "12px",
      "6xl": "25px",
      xl: "20px",
      "2xl": "21px",
      "16xl": "35px",
      "9xl": "28px",
      "5xs": "8px",
      "7xl": "26px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
