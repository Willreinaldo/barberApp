import joi from "joi";

export const signUpSchema = joi.object({
  name: joi.string().min(2).required(),
  email: joi.string().email().required(),
  phone: joi.string().min(9).max(12).required(),
  password: joi.string().required(),
});

export const signInSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const userUpdateSchema = joi.object({
  id: joi.number().optional(),
  createdAt: joi.date().optional(),
  updatedAt: joi.date().optional(),
  name: joi.string().optional(),
  email: joi.string().email().optional(),
  phone: joi.string().optional(),
  password: joi.string().optional(),
  avatarUrl: joi.string().optional(),
});