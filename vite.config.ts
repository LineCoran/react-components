/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import { configDefaults, defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-components/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      exclude: [...configDefaults.coverage.exclude, 'src/types', 'src/main.tsx'],
      provider: 'c8',
      all: true,
      skipFull: false,
      reporter: 'text',
    },
  },
});
