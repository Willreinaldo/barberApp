import { Router } from "express";
import * as AppointmentController  from '../controllers/appointment.controller';
import { validateSchema } from '../middlewares/validate-schema';
import { createAppointmentSchema, updateAppointmentSchema, getOrDeleteAppointmentSchema } from '../schemas/appointment-schemas';

const appointmentRouter = Router();

// Endpoint para listar os agendamentos (GET /appointments)
appointmentRouter.get('/appointments', AppointmentController.listAppointments);

// Endpoint para criar um novo agendamento (POST /appointments)
// Valida os dados de criação com o createAppointmentSchema
appointmentRouter.post('/appointments', validateSchema(createAppointmentSchema), AppointmentController.createAppointment);

// Endpoint para atualizar um agendamento existente (PUT /appointments/:id)
// Valida os dados de atualização com o updateAppointmentSchema
appointmentRouter.put('/appointments/:id', validateSchema(updateAppointmentSchema), AppointmentController.updateAppointment);

// Endpoint para deletar um agendamento (DELETE /appointments/:id)
// Valida o ID do agendamento com o getOrDeleteAppointmentSchema
appointmentRouter.delete('/appointments/:id', validateSchema(getOrDeleteAppointmentSchema), AppointmentController.deleteAppointment);

export {appointmentRouter};