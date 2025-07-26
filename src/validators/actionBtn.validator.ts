import { z } from 'zod';

export const ActionButtonSchema = z.object({
    id: z.number().int().positive(),
    label: z.string(),
    icon: z.string()
});
export type ActionBtn = z.infer<typeof ActionButtonSchema>;