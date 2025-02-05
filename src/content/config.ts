import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    previewImage: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    slug: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
