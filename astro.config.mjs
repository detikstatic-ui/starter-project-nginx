import sitemap from "@astrojs/sitemap"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
    site: "https://design.detik.com",
    vite: {
        plugins: [tailwindcss()],
        build: {
            cssCodeSplit: false,
        },
    },
    integrations: [sitemap()],
    build: {
        format: "file",
        assets: "_assets",
        inlineStylesheets: "never",
    },
    base: "/starter-project", //Change to your base path
    compressHTML: false,
    output: "static",
})
