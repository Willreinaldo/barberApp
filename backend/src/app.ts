import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRoutes } from "./routers/users-router";
import { appointmentRouter } from  "./routers/appointment-router";
import  evaluationRouter from  "./routers/evalutation-router";
 
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
  .use("/agendar", appointmentRouter)
  .use("/avaliar", evaluationRouter)
  .use(handleApplicationErrors);

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
