import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';

const dirPath = path.resolve(__dirname, './');
const sourcePath = `${dirPath}/src`;

export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '~': dirPath,
      '@': sourcePath,
    },
  },
  server: {
    port: 4000,
  },
  plugins: [react()],
});
