import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;

  const initialState = {
    logged: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
