import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { config } from 'dotenv';

config({ path: resolve(__dirname, '.env.test') });

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    css: true,
    setupFiles: resolve(__dirname, './src/lib/utils/testSetup.ts'),
    include: ['**/*.test.?(c|m)[jt]s?(x)'],
  },
  esbuild: {
    target: 'es2020',
  },
});
