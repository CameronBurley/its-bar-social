import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macros from "vite-plugin-babel-macros"
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
			babel: {
				plugins: ["babel-plugin-macros"],
			},
		}),
		macros(),
    svgr()
  ],
})
