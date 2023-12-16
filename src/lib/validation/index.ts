import * as z from "zod";
 export const signupValidation = z.object({
    name: z.string() .min(2,{message:"Name must be at least 2 charecters"}),
    username: z.string().min(2,{message:"Username must be at least 2 charecters"}),
    email: z.string() .email(),
    password: z.string() .min(8,{message:"Password must be at least 8 charecters"}),
  });