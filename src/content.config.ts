import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/[0-9][0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9]_*.md", base: "./src/data/blog" }),
  schema: z.object({
    slug: z.string().min(1),
    title: z.string().min(3),
    summary: z.string().min(5),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
  }).strict(),
});

export const collections = {
  blog,
};
