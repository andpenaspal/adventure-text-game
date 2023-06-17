/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{find: '~', replacement: '/src'}]
  },
  test: {
    globals: true,
    setupFiles: './test.setup.js',
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      all: true,
      include: ['src/**'],
      exclude: ['**/*.d.ts', 'src/main.tsx'],
      lines: 70,
      functions: 70,
      branches: 70,
      statements: 70,
      watermarks: {
        lines: [80, 90],
        branches: [80, 90],
        statements: [80, 90],
        functions: [80, 90]
      }
    }
  }
});
