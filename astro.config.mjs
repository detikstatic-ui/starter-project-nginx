import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

// https://astro.build/config
export default defineConfig({
    site: "https://design.detik.com",
    vite: {
        build: {
            cssCodeSplit: false,
        },
    },
    integrations: [
        sitemap(),
        tailwind({
            applyBaseStyles: false,
        }),
    ],
    build: {
        format: "file",
        assets: "_assets",
        inlineStylesheets: "never",
    },
    base: "/starter-project", //Change to your base path
    compressHTML: false,
    output: "static",
})
