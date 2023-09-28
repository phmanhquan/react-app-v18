import React, { ReactNode, useReducer } from "react";
import authReducer from "./reducers/authReducer";
import AuthContext from "./contexts/authContext";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [auth, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
