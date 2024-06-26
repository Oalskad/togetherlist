import z from 'zod';
import { UserSchema } from '../user.schema';

export const TaskSchema = z.object({
  _id: z.string().optional(),
  name: z.string(),
  schedule: z
    .object({
      from: z.string().optional(),
      to: z.string().optional(),
    })
    .optional(),
  status: z.string().optional(),
  userId: UserSchema.optional(),
  assignee: UserSchema.optional(),
  indexCount: z.number().optional(),
  isPriority: z.boolean().optional(),
  description: z.string().optional(),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
  index: z.number().optional(),
});

export type TaskType = z.infer<typeof TaskSchema>;
