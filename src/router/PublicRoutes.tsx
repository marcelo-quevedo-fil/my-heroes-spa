import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

interface PublicRoutesProps {
  children: React.ReactNode;
}

export const PublicRoutes = (props: PublicRoutesProps) => {
  const { children } = props;
  const { logged } = useContext(AuthContext);
  return !logged ? children : <Navigate to="/marvel" />;
};
