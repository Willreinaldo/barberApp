import prisma from "../config/database";

export const getAllBarbers = async () => {
  return prisma.barber.findMany();
};

export const createBarber = async (data) => {
  return prisma.barber.create({ data });
};

export const updateBarber = async (id, data) => {
  return prisma.barber.update({
    where: { id },
    data,
  });
};

export const deleteBarber = async (id) => {
  return prisma.barber.delete({ where: { id } });
};