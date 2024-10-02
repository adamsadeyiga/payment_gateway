// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()],
  build: {
    rollupOptions: {
      input: 'index.html', // Explicitly tell Vite where the entry point is
    }
  },
  base: '/adamsadeyiga/', // Replace <repository-name> with your repo's name
});


