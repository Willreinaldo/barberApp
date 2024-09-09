import prisma from "../config/database";
import { Prisma } from "@prisma/client";

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

async function create(data: Prisma.UserUncheckedCreateInput) {
  return prisma.user.create({
    data,
  });
}
// Nova função para atualizar o usuário
async function update(id: number, data: Prisma.UserUpdateInput) {
  return prisma.user.update({
    where: { id },
    data,
  });
}
export const getUserRepository = async (id: number) => {
  try {
     const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        avatarUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return user;
  } catch (error) {
    console.error('Erro ao buscar usuário no banco de dados:', error);
    throw new Error('Erro ao buscar usuário no repositório');
  }
};
const userRepository = {
  findByEmail,
  create,
  update, 
  getUserRepository,
};

export default userRepository;
