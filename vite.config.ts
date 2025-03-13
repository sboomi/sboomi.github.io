import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    visualizer({
			emitFile: true,
			filename: 'stats.html'
		})
  ],
  server: {
    port: 3002,
  },
  assetsInclude: ['**/*.md'],
});
