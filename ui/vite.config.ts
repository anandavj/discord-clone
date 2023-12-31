import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { URL, fileURLToPath } from "url"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: fileURLToPath(new URL("./src", import.meta.url)),
            },
            {
                find: "@components",
                replacement: fileURLToPath(new URL("./src/components", import.meta.url)),
            },
            {
                find: "@views",
                replacement: fileURLToPath(new URL("./src/views", import.meta.url)),
            },
        ],
    },
})
