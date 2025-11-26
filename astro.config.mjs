// @ts-check
import { defineConfig } from 'astro/config';
import opengraphImage from 'astro-opengraph-images'

// https://astro.build/config
export default defineConfig({
    integrations: [
        opengraphImage()
    ],
});
