import api from "./api";

type Login = {
  email: string;
  password: string;
};

export async function signIn(form: Login) {
  const response = await api.post("users/signin", form);
  return response.data;
}
