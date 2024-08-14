import { signIn, signUp } from "@/controllers";
import { validateSchema } from "../middlewares/validate-schema";
import { signInSchema,signUpSchema } from "../schemas/users-schemas";
import { Router } from "express";

const userRoutes = Router();

userRoutes
  .post("/sign-up", validateSchema(signUpSchema), signUp)
  .post("/sign-in", validateSchema(signInSchema), signIn);

export { userRoutes };
