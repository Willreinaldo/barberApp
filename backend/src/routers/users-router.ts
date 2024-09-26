import { signIn, signUp,updateUser, getUser, deleteUserProfile  } from "../controllers";
import { authenticateToken } from "../middlewares/authentication-middleware";
import { validateSchema  } from "../middlewares/validate-schema";
import { signInSchema,signUpSchema, userUpdateSchema, getUserSchema } from "../schemas/users-schemas";
import { Router } from "express";

const userRoutes = Router();

userRoutes
  .post("/signup", validateSchema(signUpSchema), signUp)
  .post("/signin", validateSchema(signInSchema), signIn)
  .get("/user/:id", validateSchema(getUserSchema), getUser)
  .put("/user/:id", validateSchema(userUpdateSchema), updateUser)
  .delete("/user",authenticateToken ,deleteUserProfile);


export { userRoutes };
