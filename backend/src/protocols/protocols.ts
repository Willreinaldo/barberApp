import { User } from "@prisma/client";

export type ApplicationError = {
  name: string;
  message: string;
};

export type SignInParams = Pick<User, "email" | "password">;

export type SignUpParams = Pick<User, "name" | "email" | "password" | "phone">;

export type updateUserParams = Pick<User, "name" | "email" | "password" |"avatarUrl" | "phone" >;


// export type ClassParams = Pick<Classes, "name" | "quantity">;

// export type StudentParams = Omit<Student, "id">;
