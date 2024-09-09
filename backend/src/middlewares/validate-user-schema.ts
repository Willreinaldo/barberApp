// src/middlewares/validate-user-update.ts
import { Request, Response, NextFunction } from 'express';
import { userUpdateSchema } from '../schemas/users-schemas';

export const validateUserUpdate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = userUpdateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};