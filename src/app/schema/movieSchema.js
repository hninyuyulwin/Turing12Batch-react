import { z } from "zod";

export const movieSchema = z.object({
  title: z.string().min(5, "Title field is required!"),
  year: z.coerce.number().int().min(2, "Year is required!"),
  director: z.string().min(5, "Director is required!"),
});
