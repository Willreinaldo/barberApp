import joi from "joi";

// Schema para criar um novo agendamento
export const createAppointmentSchema = joi.object({
  date: joi.date().required().messages({
    'date.base': 'A data é obrigatória e deve estar no formato correto.',
  }),
  userId: joi.number().required().messages({
    'number.base': 'O ID do usuário é obrigatório.',
  }),
  barberId: joi.number().required().messages({
    'number.base': 'O ID do barbeiro é obrigatório.',
  }),
  serviceIds: joi.array().items(joi.number()).min(1).required().messages({
    'array.base': 'Deve ser enviada uma lista de serviços.',
    'array.min': 'Selecione pelo menos um serviço.',
  }),
  comments: joi.string().allow(null, '').optional().messages({
    'string.base': 'Comentários devem ser uma string.',
  }),
});

// Schema para atualizar um agendamento existente
export const updateAppointmentSchema = joi.object({
    date: joi.date().optional().messages({
      'date.base': 'A data deve estar no formato correto.',
    }),
    barberId: joi.number().optional().messages({
      'number.base': 'O ID do barbeiro deve ser válido.',
    }),
    serviceIds: joi.array().items(joi.number()).optional().messages({
      'array.base': 'A lista de serviços deve ser válida.',
    }),
    comments: joi.string().allow(null, '').optional().messages({
      'string.base': 'Comentários devem ser uma string.',
    }),
  });

  // Schema para validar ID de agendamento
export const getOrDeleteAppointmentSchema = joi.object({
    id: joi.number().optional().messages({
      'number.base': 'O ID do agendamento é obrigatório.',
    }),
  });