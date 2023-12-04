import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});
const works = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    url: z.string(),
  }),
});

export const collections = {
  blog,
  works,
};
