// appointment-service.ts
import * as appointmentRepository from "../repositories/appointment";

export const listAppointments = async () => {
  return await appointmentRepository.getAllAppointments();
};

export const createAppointment = async (data: any) => {
  return await appointmentRepository.createAppointment(data);
};

export const updateAppointment = async (id: number, data: any) => {
  return await appointmentRepository.updateAppointment(id, data);
};

export const deleteAppointment = async (id: number) => {
  return await appointmentRepository.deleteAppointment(id);
};

export const getAppointment = async (id: number) => {
  return await appointmentRepository.getAppointmentById(id);
};


export const checkTimeAvailability = async (appointmentDate: Date): Promise<boolean> => {
  const appointmentExists = await appointmentRepository.checkAppointmentInDatabase(appointmentDate);
  console.log(appointmentDate);
  console.log(appointmentExists);

  return !appointmentExists; 
};