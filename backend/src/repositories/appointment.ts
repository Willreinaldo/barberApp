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
  console.log("no repositório de criar agendamento: ", data);
  return await prisma.appointment.create({
    data: {
      date: data.date,
      userId: data.userId,
      barberId: data.barberId,
      comments: data.comments,
      services: {
        create: data.serviceIds.map((serviceId: number) => ({
          serviceId,

        })),
      },
    },
  });
};

export const updateAppointment = async (id: number, data: any) => {
  try {

    return await prisma.appointment.update({
      where: { id },
      data: {
        date: new Date(data.date),
        barberId: data.barberId,
        comments: data.comments,
        services: {
          deleteMany: {},
          create: data.serviceIds.map((serviceId: number) => ({
            serviceId,
          })),
        },
      },
    });
  } catch (error) {
    console.error('Erro ao atualizar o agendamento:', error);
    throw new Error('Não foi possível atualizar o agendamento.');
  }
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


export const checkAppointmentInDatabase = async (appointmentDate: Date) => {
  console.log(appointmentDate);
  const appointment = await prisma.appointment.findFirst({
    where: {
      date: appointmentDate,
    },
  });

  return appointment; 
};