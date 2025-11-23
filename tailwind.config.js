import tailwindcssPrimeui from 'tailwindcss-primeui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primeicons/**/*.{css,js}",
    "./node_modules/@primeuix/themes/**/*.{js,ts,css}"
  ],
  plugins: [
    tailwindcssPrimeui,
  ],
};
