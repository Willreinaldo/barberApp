import { signIn, signUp,updateUser, getUser  } from "../controllers";
import { validateSchema  } from "../middlewares/validate-schema";
import { signInSchema,signUpSchema, userUpdateSchema, getUserSchema } from "../schemas/users-schemas";
import { Router } from "express";

const userRoutes = Router();

userRoutes
  .post("/signup", validateSchema(signUpSchema), signUp)
  .post("/signin", validateSchema(signInSchema), signIn)
  .get("/user/:id", validateSchema(getUserSchema), getUser)
  .put("/user/:id", validateSchema(userUpdateSchema), updateUser);  


export { userRoutes };
