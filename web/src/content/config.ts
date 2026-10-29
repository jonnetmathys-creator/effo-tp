import { defineCollection, z } from 'astro:content';

// Collection « réalisations » : chaque chantier est une fiche JSON éditable via /admin.
const realisations = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    category: z.enum(['irve', 'rte', 'sncf', 'genie-civil', 'terrassement', 'adduction', 'amenagements', 'particuliers']),
    location: z.string().optional().default(''),
    description: z.string(),
    details: z.string().optional().default(''),
    tags: z.array(z.string()).optional().default([]),
    photos: z.array(z.string()).optional().default([]),
    icon: z.string().optional(),
    order: z.number().optional().default(0),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { realisations };
