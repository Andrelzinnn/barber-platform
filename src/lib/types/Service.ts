import * as z from "zod";

export type Service = {
	id: string;
	name: string;
	price: string;
	image?: string;
};

export const updateServiceSchema = z.object({
	name: z.string().min(2).optional(),
	price: z.number().positive().optional(),
});

export type UpdateServiceSchema = z.infer<typeof updateServiceSchema>;
