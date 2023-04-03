/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}", './src/index.css'];

export const plugins = [];

export const theme = {
  extend: {
    fontFamily: ["Barlow Semi Condensed", "sans-serif"],
    colors: {
      "scissior-1": "hsl(39, 89%, 49%)",
      "scissior-2": "hsl(40, 84%, 53%)",
      "paper-1": "hsl(230, 89%, 62%)",
      "paper-2": "hsl(230, 89%, 65%)",
      "rock-1": "hsl(349, 71%, 52%)",
      "rock-2": " hsl(349, 70%, 56%)",
      "lizard-1": "hsl(261, 73%, 60%)",
      "lizard-2": "hsl(261, 72%, 63%)",
      "cyan-1": "hsl(189, 59%, 53%)",
      "cyan-2": "hsl(189, 58%, 57%)",
      "radial-1": "hsl(214, 47%, 23%)",
      "radial-2": "hsl(237, 49%, 15%)",
      darkBlue: "hsl(229, 25%, 31%)", // Dark Text
      lightBlue: "hsl(229, 64%, 46%)", // Score Text
      lightGray: "hsl(217, 16%, 45%)", // Header  Outline
    },
    backgroundImage: {
      "pentagon-pattern": "url('/src/assets/bg-pentagon.svg')",
      'gradient-radial': 'repeating-radial-gradient(circle at top center, var(--tw-gradient-stops))',
    },
    boxShadow: {
      "boxShadow-1": "0 -5px 0px 0px inset rgba(0,0,0,0.3)",
      "boxShadow-2": "0 5px 0px 0px inset rgba(0,0,0,0.2)",
      "boxShadow-3": "0 35px 60px -15px rgba(0,0,0,0.3)",
    },
  },
  fontWeight: { light: "600", semiBold: "600", extraBold: "700" },
};
