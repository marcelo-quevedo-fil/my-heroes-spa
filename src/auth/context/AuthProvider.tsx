import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { reducerActions } from "./reducerActions";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;

  const init = () => {
    const user = localStorage.getItem("user");
    return {
      logged: !!user,
      user: user ? JSON.parse(user) : null,
    };
  };

  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = (name: string) => {
    const user = {
      id: "ABC",
      name: name,
    };

    const action = {
      type: reducerActions.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");

    const action = {
      type: reducerActions.logout,
    };
    dispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
