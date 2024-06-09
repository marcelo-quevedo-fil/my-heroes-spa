import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export const LoginPage = () => {
  const navigator = useNavigate();

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login("Clementina Quevedo");

    navigator("/", {
      replace: true,
    });
  };

  return (
    <>
      <div className="container mt-5">
        <h1>LoginPage</h1>
        <hr />
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
};
