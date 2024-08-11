import express, { json, Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(json());
app.use(cors());

app.get("/health", (req: Request, res: Response) => res.send("Hello world"));

// app.use("/api");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
