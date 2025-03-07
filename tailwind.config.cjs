/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./next/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./next/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./next/modules/components/*.{js,ts,jsx,tsx,mdx}",
    "./next/modules/common/components/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

