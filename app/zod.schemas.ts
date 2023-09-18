import {z} from 'zod'

export const Z_Tag = z.object({
   label: z.string(),
})
export const Z_Category = z.object({
   label: z.string(),
   tags: Z_Tag.array().optional(),
})
export const Z_Ressource = z.object({
   title: z.string(),
   description: z.string(),
   categories: Z_Category.array(),
   tags: Z_Tag.array().optional(),
})

