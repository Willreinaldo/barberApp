import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRoutes } from "./routers/users-router";
import { handleApplicationErrors } from "./middlewares/erros-middleware";

dotenv.config();

const app = express();

// app.use(json());
// app.use(cors());

app
  .use(cors())
  .use(json())
  .get("/health", (_req, res) => res.send("Hello world"))
  .use("/users", userRoutes)
  .use(handleApplicationErrors);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
