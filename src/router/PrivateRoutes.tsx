import { useContext } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

interface PrivateRoutesProps {
  children: React.ReactNode;
}

export const PrivateRoutes = (props: PrivateRoutesProps) => {
  const { children } = props;
  const { logged } = useContext(AuthContext);

  const { pathname, search } = useLocation();
  const lastPath = pathname + search;

  localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to="/login" />;
};
