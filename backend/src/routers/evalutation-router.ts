import { Router } from "express";
import { createEvaluation, getEvaluations, getUserEvaluations, updateEvaluation, deleteEvaluation } from '../controllers/evaluation.controller';

const evaluationRouter:Router = Router();

// Endpoint para CRUD de avaliações
evaluationRouter.post("/evaluations", createEvaluation);
evaluationRouter.get("/evaluations", getEvaluations);    // Todas as avaliações
evaluationRouter.get("/evaluations/user", getUserEvaluations); // Avaliações do usuário logado
evaluationRouter.put("/evaluations/:id", updateEvaluation);
evaluationRouter.delete("/evaluations/:id", deleteEvaluation);

export default evaluationRouter;