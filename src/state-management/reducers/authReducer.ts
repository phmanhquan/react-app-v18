interface LoginAction {
  type: "LOGIN";
  name: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (user: string = "", action: AuthAction): string => {
  if (action.type === "LOGIN") return action.name;
  if (action.type === "LOGOUT") return "";

  return user;
};

export default authReducer;
