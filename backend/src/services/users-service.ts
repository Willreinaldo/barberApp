import { duplicatedEmailError, invalidCredentialsError } from "../errors";
import { SignInParams, SignUpParams, updateUserParams  } from "../protocols/protocols";
import sessionRepository from "../repositories/sessions";
import userRepository,{getUserRepository} from "../repositories/users";
import { exclude } from "../utils/prisma-utils";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function signIn(params: SignInParams) {
  const { email, password } = params;

  console.log(params);
  const user = await getUser(email);

  const validatePassword = await bcrypt.compare(password, user.password);
  if (!validatePassword) throw invalidCredentialsError();

  const token = await createSession(user.id);

  return {
    user: exclude(user, "password"),
    token,
  };
}

async function createSession(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string);
  await sessionRepository.create({ token, userId });

  return token;
}

async function getUser(email: string) {
  const user = await userRepository.findByEmail(email);

  if (!user) throw invalidCredentialsError();

  return user;
}

async function createUser(params: SignUpParams) {
   const { name, email, password, phone } = params;

  await validateUniqueEmail(email);

  const hashPassword = await bcrypt.hash(password, 12);

  return userRepository.create({
    name,
    email,
    phone,
    password: hashPassword,
  });
}

async function validateUniqueEmail(email: string) {
  const findEmail = await userRepository.findByEmail(email);
  if (findEmail) throw duplicatedEmailError();
}

async function updateUser(id: number, params: updateUserParams) {
  try {
    const updatedData = (params as any).updatedData || params;

     const { name, email, phone, password, avatarUrl } = updatedData;
    console.log("Dados para atualização:", updatedData);

    const dataToUpdate: any = { name, email, phone, avatarUrl };

    if (password) {
      dataToUpdate.password = await bcrypt.hash(password, 12);
    }

     const updatedUser = await userRepository.update(id, dataToUpdate);

    return exclude(updatedUser, "password");
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    throw new Error("Erro ao atualizar usuário.");
  }
}
export const getUserService = async (id: number) => {
  try {
     const user = await getUserRepository(id);

     return user;
  } catch (error) {
    console.error('Erro ao buscar usuário no serviço:', error);
    throw new Error('Erro ao buscar usuário no serviço');
  }
};

export const userService = {
  signIn,
  createUser,
  updateUser,
  getUserService
};

export default userService;
