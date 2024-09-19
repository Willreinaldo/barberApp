import prisma from "../config/database";

export const getAllServices = async () => {
    return prisma.service.findMany();
  };
  
  export const createService = async (data) => {
    return prisma.service.create({ data });
  };
  
  export const updateService = async (id, data) => {
    return prisma.service.update({
      where: { id },
      data,
    });
  };
  
  export const deleteService = async (id) => {
    return prisma.service.delete({ where: { id } });
  };