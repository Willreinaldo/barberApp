import { PrismaClient, Evaluation } from '@prisma/client';

const prisma = new PrismaClient();

interface EvaluationData {
  rating: number;
  comments?: string;
  userId: number;
}

export const createEvaluationRepository = async (data: EvaluationData): Promise<Evaluation> => {
  console.log
  return prisma.evaluation.create({
    data: {
      rating: data.rating,
      comments: data.comments,
      userId: data.userId,
    },
  });
};

export const getEvaluationsRepository = async (userId: number): Promise<Evaluation[]> => {
  return prisma.evaluation.findMany({
    where: {
      userId: {
        not: userId, // Exclui as avaliações do usuário logado
      },
    },
    include: {
      user: {
        select: {
          name: true, 
        },
      },
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
  
  try {
    const updatedEvaluation = await prisma.evaluation.update({
      where: { id: evaluationId },
      data,
    });
    
    return updatedEvaluation; // Retorna a avaliação atualizada
  } catch (error) {
    console.error('Erro ao atualizar a avaliação:', error);
    throw new Error('Não foi possível atualizar a avaliação.'); // Lança um erro para ser tratado em outro lugar, se necessário
  }
};

export const deleteEvaluationRepository = async (evaluationId: number): Promise<void> => {
  await prisma.evaluation.delete({
    where: { id: evaluationId },
  });
};
