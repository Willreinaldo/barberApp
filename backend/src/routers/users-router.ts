import { signIn, signUp,updateUser  } from "../controllers";
import { validateSchema  } from "../middlewares/validate-schema";
import { signInSchema,signUpSchema, userUpdateSchema } from "../schemas/users-schemas";
import { Router } from "express";

const userRoutes = Router();

userRoutes
  .post("/signup", validateSchema(signUpSchema), signUp)
  .post("/signin", validateSchema(signInSchema), signIn)
  .put("/user/:id", validateSchema(userUpdateSchema), updateUser);  

export { userRoutes };
