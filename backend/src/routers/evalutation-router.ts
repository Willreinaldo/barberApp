import { Router } from "express";
import { createEvaluation, getEvaluations, getUserEvaluations, updateEvaluation, deleteEvaluation } from '../controllers/evaluation.controller';

const evaluationRouter:Router = Router();

// Endpoint para CRUD de avaliações
evaluationRouter.post("/evaluations", createEvaluation);
evaluationRouter.get("/evaluations/others/:userId", getEvaluations);    
evaluationRouter.get("/evaluations/user/:userId", getUserEvaluations); 
evaluationRouter.put("/evaluations/:userId", updateEvaluation);
evaluationRouter.delete("/evaluations/:userId", deleteEvaluation);

export default evaluationRouter;