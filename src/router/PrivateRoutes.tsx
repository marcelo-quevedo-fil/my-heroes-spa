import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

interface PrivateRoutesProps {
  children: React.ReactNode;
}

export const PrivateRoutes = (props: PrivateRoutesProps) => {
  const { children } = props;

  const { logged } = useContext(AuthContext);

  return logged ? children : <Navigate to="/login" />;
};
