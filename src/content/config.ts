import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["umumiy"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      series: z
        .object({
          name: z.string(),
          order: z.number(),
        })
        .optional(),
    }),
});

const series = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    order: z.number(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { blog, series };
