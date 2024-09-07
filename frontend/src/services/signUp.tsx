import api from "./api";

type SignUp ={
    name: string;
    email: string;
    phone: string;
    password: string
};

export async function signUp(form:SignUp) {
  const response = await api.post("/users/signup", form);
  return response.data;
}
