import { Evaluation } from '@prisma/client';
import { createEvaluationRepository, getEvaluationsRepository, getUserEvaluationsRepository, updateEvaluationRepository, deleteEvaluationRepository } from '../repositories/evaluation';

interface EvaluationData {
  rating: number;
  comments?: string;
  userId: number;
}

export const createEvaluationService = async (data: EvaluationData): Promise<Evaluation> => {
  return createEvaluationRepository(data);
};

export const getEvaluationsService = async (): Promise<Evaluation[]> => {
  return getEvaluationsRepository();
};

export const getUserEvaluationsService = async (userId: number): Promise<Evaluation[]> => {
  return getUserEvaluationsRepository(userId);
};

export const updateEvaluationService = async (evaluationId: number, data: Partial<EvaluationData>): Promise<Evaluation> => {
  return updateEvaluationRepository(evaluationId, data);
};

export const deleteEvaluationService = async (evaluationId: number): Promise<void> => {
  return deleteEvaluationRepository(evaluationId);
};
