/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-6": "#f2f2f2",
        white: "#fff",
        light: "#dedede",
        secondary: "#909090",
        silver: "#c4c4c4",
        active: "rgba(0, 0, 0, 0.56)",
        "core-gray-lightest": "#f9f9f9",
        "gray-1": "#333",
        "gray-3": "#828282",
        lighter: "#ebebeb",
        "brand-cyber": "#7f35b2",
        base: "#bdbdbd",
        "gray-2": "#4f4f4f",
        lightest: "#f5f5f5",
        gray: {
          "100": "#777",
          "200": "#1d2145",
        },
        darkslategray: "#333c4c",
        "black-40": "rgba(0, 0, 0, 0.4)",
        "gray-5": "#e0e0e0",
        "grey-blue-97": "#f5f6f7",
        "grey-blue-90": "#dadee6",
        "grey-blue-75": "#99a6bf",
        "grey-blue-25": "#202b40",
        "natural-3": "#858688",
        whitesmoke: {
          "100": "#ececec",
          "200": "rgba(238, 238, 238, 0.6)",
        },
        "black-2": "#323335",
        "light-gray": "#fbfbfb",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        "font-awesome-icon-solid-16": "'Roboto Serif'",
        body: "Inter",
        "medium-24": "Roboto",
        sacramento: "Sacramento",
        "poppins-medium": "Poppins",
      },
      borderRadius: {
        "6xs-5": "6.5px",
        "2xs": "11px",
        "4xs-5": "8.5px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "14px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      "5xs": "8px",
      "7xl": "26px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      "11xl": "30px",
      smi: "13px",
      "6xl": "25px",
      xl: "20px",
      "2xl": "21px",
      "16xl": "35px",
      "9xl": "28px",
      "3xs": "10px",
      "2xs": "11px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1025: {
        raw: "screen and (max-width: 1025px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
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
