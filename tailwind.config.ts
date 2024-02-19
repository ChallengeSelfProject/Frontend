import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'transparent': 'transparent',
      'current': 'currentColor',
      'black': '#000',
      'white': '#fff',
      'primary': {
        '50': '#e6f0ff',
        '75': '#96c0ff',
        '100': '#6ba6ff',
        '200': '#2b7fff',
        '300': '#0065ff',
        '400': '#0047b3',
        '600': '#003e9c',
      },
      'gray': {
        '50': '#FAFAFA',
        '100': '#F6F7F9',
        '200': '#E5E7EA',
        '300': '#CED2D6',
        '400': '#9EA5AD',
        '500': '#676E76',
        '600': '#596066',
        '700': '#454C52',
        '800': '#383F45',
        '900': '#24292E',
        '1000': '#1A1D1F',
      },
      'error': {
        '50': '#FAFAFA',
        '100': '#FEF2F2',
        '200': '#FDE9E9',
        '300': '#FAC7C7',
        '400': '#F7A1A1',
        '500': '#F37373',
        '600': '#F34141',
        '700': '#CD3636',
        '800': '#A32E2E',
        '900': '#7C2323',
        '1000': '#601B1B',
      },
      'warning': {
        '50': '#FFFCF5',
        '100': '#FEFAF5',
        '200': '#FBF2CB',
        '300': '#FDE57E',
        '400': '#FFD16A',
        '500': '#FBBC55',
        '600': '#E9A23B',
        '700': '#C8811A',
        '800': '#A35C00',
        '900': '#8B4400',
        '1000': '#78310B',
      },
      'success': {
        '50': '#F6FEF9',
        '100': '#EFFDF6',
        '200': '#D9F9E6',
        '300': '#B8F1D2',
        '400': '#8EE4BA',
        '500': '#6AD09D',
        '600': '#53B483',
        '700': '#2F9461',
        '800': '#2F7657',
        '900': '#255E46',
        '1000': '#1E4D3A',
      
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
