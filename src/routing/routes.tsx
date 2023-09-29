import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import UsersPage from "./UsersPage";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "/login", element: <LoginPage></LoginPage> },
    ],
  },
  {
    element: <PrivateRoutes></PrivateRoutes>,
    children: [
      {
        path: "users",
        element: <UsersPage></UsersPage>,
        children: [{ path: ":id", element: <UserDetail></UserDetail> }],
      },
    ],
  },
]);

export default router;
