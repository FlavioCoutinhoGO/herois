import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const herois = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/herois" })
});

export const collections = { herois };