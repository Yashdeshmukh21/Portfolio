// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // This plugin handles JSX files
  server: {
    port: 5173, // Set your desired port
    host: '0.0.0.0', // Allow external connections
  },
});