import { defineCollection, defineContentConfig, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
        date: z.string().optional(),
        author: z.string().optional(),
        image: z.string().optional(),
      }),
    }),
    page: defineCollection({
      type: 'page',
      source: 'page/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        category: z.string().optional(),
        locale: z.string(),
      }),
    }),
    // Questions collections - separate per locale (de and en only)
    questions_de: defineCollection({
      type: 'page',
      source: {
        include: 'questions/de/**/*.md',
        prefix: '/de',
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
    questions_en: defineCollection({
      type: 'page',
      source: {
        include: 'questions/en/**/*.md',
        prefix: '/en',
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
  },
});
