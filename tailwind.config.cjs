/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./next/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./next/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./next/modules/components/*.{js,ts,jsx,tsx,mdx}",
    "./next/common/components/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

