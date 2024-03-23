import { z } from "zod";

const formSchema = z.object({
  username: z.string().regex(/^@[^\s]{2,32}$/, {
    message: "Wrong discord",
  }),
  walletAddress: z.string().regex(/^1X\S{40}$/, { message: "Wrong address" }),
});

export { formSchema };
