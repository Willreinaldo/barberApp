import { Request, Response } from 'express';
import { createEvaluationService, getEvaluationsService, getUserEvaluationsService, updateEvaluationService, deleteEvaluationService } from '../services/evaluation-service';

// Interface para estender o Request com a propriedade `user`
interface AuthenticatedRequest extends Request {
  user?: { id: number }; // Defina o tipo apropriado para o `user`
}

export const createEvaluation = async (req: AuthenticatedRequest, res: Response): Promise<Response> => {
  try {
    const userId = +req.body.userId; 
    console.log(req.body);
    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }
    const { rating, comments } = req.body;
    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' });
    }
    const newEvaluation = await createEvaluationService({ rating, comments, userId });
    return res.status(201).json(newEvaluation);
  } catch (error) {
    return res.status(500).json({ error: 'Error creating evaluation' });
  }
};

export const getEvaluations = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userId = +req.params.userId; 
    const evaluations = await getEvaluationsService(userId);
    return res.status(200).json(evaluations);
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching evaluations' });
  }
};

export const getUserEvaluations = async (req: AuthenticatedRequest, res: Response): Promise<Response> => {
  try {
    const userId = +req.params.userId; 
    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }   
     if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' });
    }
    const evaluations = await getUserEvaluationsService(userId);
    return res.status(200).json(evaluations);
  } catch (error) {
    return res.status(500).json({ error: "Error fetching user's evaluations" });
  }
};

export const updateEvaluation = async (req: AuthenticatedRequest, res: Response): Promise<Response> => {
  try {
    const { rating, comments } = req.body;
    const evaluationId = parseInt(req.params.userId);
    const updatedEvaluation = await updateEvaluationService(evaluationId, { rating, comments });
    return res.status(200).json(updatedEvaluation);
  } catch (error) {
    return res.status(500).json({ error: 'Error updating evaluation' });
  }
};

export const deleteEvaluation = async (req: AuthenticatedRequest, res: Response): Promise<Response> => {
  try {
    const evaluationId = parseInt(req.params.userId);
    await deleteEvaluationService(evaluationId);
    return res.status(200).json({ message: 'Evaluation deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting evaluation' });
  }
};
