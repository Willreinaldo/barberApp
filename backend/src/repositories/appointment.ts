// appointment-repository.ts
import prisma from "../config/database";

export const getAllAppointments = async () => {
  return await prisma.appointment.findMany({
    include: {
      user: true,
      barber: true,
      services: {
        include: {
          service: true,
        },
      },
    },
  });
};

export const createAppointment = async (data: any) => {
  return await prisma.appointment.create({
    data: {
      date: data.date,
      time: data.time,
      userId: data.userId,
      barberId: data.barberId,
      comments: data.comments,
      services: {
        create: data.services.map((serviceId: number) => ({
          serviceId,
        })),
      },
    },
  });
};

export const updateAppointment = async (id: number, data: any) => {
  return await prisma.appointment.update({
    where: { id },
    data: {
      date: data.date,
      time: data.time,
      barberId: data.barberId,
      comments: data.comments,
      services: {
        deleteMany: {}, // Remove serviços anteriores
        create: data.services.map((serviceId: number) => ({
          serviceId,
        })),
      },
    },
  });
};

export const deleteAppointment = async (id: number) => {
  return await prisma.appointment.delete({
    where: { id },
  });
};

export const getAppointmentById = async (id: number) => {
  return await prisma.appointment.findUnique({
    where: { id },
    include: {
      user: true,
      barber: true,
      services: {
        include: {
          service: true,
        },
      },
    },
  });
};