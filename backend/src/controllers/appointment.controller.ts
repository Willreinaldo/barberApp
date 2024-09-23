 import { Request, Response } from "express";
import * as appointmentService from "../services/appointment-service";


export const listAppointments = async (req: Request, res: Response) => {
   try {
    const appointments = await appointmentService.listAppointments();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar agendamentos" });
  }
};

export const createAppointment = async (req: Request, res: Response) => {
  try {
    const newAppointment = await appointmentService.createAppointment(req.body);
    res.status(201).json(newAppointment);
  } catch (error) {
    console.log(error),
    res.status(500).json({ error: "Erro ao criar agendamento" });
  }
};

export const updateAppointment = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const updatedAppointment = await appointmentService.updateAppointment(
      Number(req.params.id),
      req.body
    );
    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar agendamento" });
  }
};

export const deleteAppointment = async (req: Request, res: Response) => {
  try {
    await appointmentService.deleteAppointment(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar agendamento" });
  }
};
 
export const checkAvailability = async (req: Request, res: Response) => {
  const { dateTime } = req.body.params;
  // Verifica se a data e o horário foram enviados
  if (!dateTime) {
    return res.status(400).json({ error: 'Data e horário são obrigatórios' });
  }

 
  try {
     const date = new Date(dateTime);

    const isAvailable = await appointmentService.checkTimeAvailability(date);

    if (!isAvailable) {
      return res.status(200).json({ available: false, message: 'Horário já está reservado' });
    }

    return res.status(200).json({ available: true, message: 'Horário disponível' });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao verificar a disponibilidade' });
  }
};

export const getAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await appointmentService.getAppointment(Number(req.params.id));
    if (!appointment) {
      return res.status(404).json({ error: "Agendamento não encontrado" });
    }
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar agendamento" });
  }
};