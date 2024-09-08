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
const userRepository = {
  findByEmail,
  create,
  update
};

export default userRepository;
