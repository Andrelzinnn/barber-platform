import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { readFile, readFileSync } from "fs";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	server: {
		https: {
			key: readFileSync("./localhost+2-key.pem"),
			cert: readFileSync("./localhost+2.pem"),
		},
	},
});
