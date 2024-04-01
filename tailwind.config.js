

/** @type {import('tailwindcss').Config} */

import disyUi from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [disyUi],
  daisyui: {
    themes: ["luxury","lemonade"],
  },
}