/*import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@sortViz': path.resolve(__dirname, './src/apps/sorting-visualizer'),
      '@pathFinder': path.resolve(__dirname, './src/apps/path-finder'),
    },
  },
  base: '/algo-visualizers/',
  build: {
    outDir: 'docs',
  },
});
*/
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@sortViz': path.resolve(__dirname, './src/apps/sorting-visualizer'),
      '@pathFinder': path.resolve(__dirname, './src/apps/path-finder'),
    },
  },
  base: '/algo-visualizers/',
  build: {
    outDir: 'docs',
  },
  server: {
    host: '0.0.0.0',  // ✅ Allows external access (required for Render)
    port: process.env.PORT || 5173,  // ✅ Uses Render’s assigned port
    strictPort: true,  // Ensures Vite only runs if the specified port is available
  },
});
