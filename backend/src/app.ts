import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRoutes } from "./routers/users-router";
import { handleApplicationErrors } from "./middlewares/erros-middleware";

dotenv.config();

const app = express();

 
app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,  
  methods: ['GET', 'POST', 'PUT', 'DELETE'],  
  allowedHeaders: ['Content-Type', 'Authorization'] 
 }))
  .use(json())
  .use("/users", userRoutes)
  .use(handleApplicationErrors);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
