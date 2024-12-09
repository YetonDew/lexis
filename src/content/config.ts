import { defineCollection, z } from "astro:content";

const serveces = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
    }),
});

export const collections = { serveces };