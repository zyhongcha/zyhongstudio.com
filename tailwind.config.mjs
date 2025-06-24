/** @type {import('tailwindcss').Config} */
import colors from "./src/const/colors";

const shadows = {
  big: "7px 7px 0 rgb(0 0 0 / 1)",
  medium: "5px 5px 0 rgb(0 0 0 / 1)",
  small: "3px 3px 0 rgb(0 0 0 / 1)",
};

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      heading: `Rouna, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
      subHeading: `Pridi, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
      body: `Pridi, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
      sans: `Pridi, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
    },
    boxShadow: shadows,
    dropShadow: shadows,
    screens: {
      xs: "354px",
      tablet: "782px",
      laptop: "1024px",
      desktop: "1280px",
    },
    colors: {
      ...colors,
    },
    extend: {
      padding: {
        spacing: "1rem",
      },
      typography: {
        DEFAULT: {
          // this is for prose class
          css: {
            color: "#111827",
            a: {
              // change anchor color and on hover
              "&:hover": {
                // could be any. It's like extending css selector
                color: colors.ocher,
              },
            },
          },
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  safelist: [
    {
      pattern: /(bg|text|border)-(pink|azure|oolong|lavender|rose)/,
    },
  ],
  plugins: [
    require("@tailwindcss/typography"),
    ({ addComponents }) => {
      addComponents({
        ".container": {
          marginLeft: "auto",
          marginRight: "auto",
          padding: "1.5rem 1rem 2rem",
          maxWidth: "100%",

          // Breakpoints
          "@screen tablet": {
            maxWidth: "1200px",
            padding: "4rem 2rem 6rem",
          },
          "@screen laptop": {
            padding: "6rem 4rem 8rem",
          },
        },
      });
    },
  ],
};
