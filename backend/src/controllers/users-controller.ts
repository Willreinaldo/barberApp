import { SignInParams, SignUpParams } from "../protocols/protocols";
import {userService, getUserService} from "../services/users-service";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
  
 
export async function signIn(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body as SignInParams;

  try {
    const result = await userService.signIn({ email, password });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

export async function signUp(req: Request, res: Response, next: NextFunction) {
  const { name, email, password, phone } = req.body as SignUpParams;

  try {
    const user = await userService.createUser({ name, email, password, phone });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    next(error);
  }
}

export const updateUser = async (req: Request, res: Response) => {
    const userId = Number(req.params.id);
  const userData = req.body;
 
  try {
    const updatedUser = await userService.updateUser(userId, userData);
     res.json(updatedUser);
   } catch (error) {
    console.error('Failed to update user:', error);
    res.status(500).json({ error: 'Failed to update user' });
  }
};


export const getUser = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);

   try {
    // Busca o usuário usando o serviço
    const user = await getUserService(userId);
    
     if (!user) {
      return res.status(httpStatus.NOT_FOUND).json({ message: 'Usuário não encontrado' });
    }

     res.json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Erro ao buscar usuário' });
  }
};