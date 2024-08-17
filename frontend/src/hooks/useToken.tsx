import { useContext } from "react";

import UserContext from "../contexts/AuthContext";

export default function useToken() {
  const { user } = useContext(UserContext);

  return user.token;
}
