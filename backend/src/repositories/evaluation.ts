import { PrismaClient, Evaluation } from '@prisma/client';

const prisma = new PrismaClient();

interface EvaluationData {
  rating: number;
  comments?: string;
  userId: number;
}

export const createEvaluationRepository = async (data: EvaluationData): Promise<Evaluation> => {
  return prisma.evaluation.create({
    data: {
      rating: data.rating,
      comments: data.comments,
      userId: data.userId,
    },
  });
};

export const getEvaluationsRepository = async (): Promise<Evaluation[]> => {
  return prisma.evaluation.findMany({
    include: {
      user: true,
    },
  });
};

export const getUserEvaluationsRepository = async (userId: number): Promise<Evaluation[]> => {
  return prisma.evaluation.findMany({
    where: { userId },
    include: {
      user: true,
    },
  });
};

export const updateEvaluationRepository = async (evaluationId: number, data: Partial<EvaluationData>): Promise<Evaluation> => {
  return prisma.evaluation.update({
    where: { id: evaluationId },
    data,
  });
};

export const deleteEvaluationRepository = async (evaluationId: number): Promise<void> => {
  await prisma.evaluation.delete({
    where: { id: evaluationId },
  });
};
