import express, { json, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => res.send("Hello world"));

const PORT = process.env.PORT || 5000;
// app.use("/api");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
