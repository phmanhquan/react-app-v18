import { useContext } from "react";
import AuthContext from "./authContext";

const useAuth = () => useContext(AuthContext);

const LoginStatus = () => {
  const { auth: user, dispatch } = useAuth();

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => dispatch({ type: "LOGOUT" })} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({ type: "LOGIN", name: "Tí Đù" })} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
