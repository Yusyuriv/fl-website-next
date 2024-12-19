import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    slug: z.string().min(1),
    title: z.string().min(3),
    description: z.string().min(5),
    date: z.date(),
    tags: z.array(z.string()),
    author: z.string(),
    draft: z.boolean().optional(),
  }).strict(),
});

export const collections = {
  blog,
};
