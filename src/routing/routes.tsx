import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import UserDetail from "./UserDetail";
import Layout from "./Layout";
import UsersPage from "./UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "users",
        element: <UsersPage></UsersPage>,
        children: [{ path: ":id", element: <UserDetail></UserDetail> }],
      },
    ],
  },
  { path: "/contact", element: <ContactPage></ContactPage> },
]);

export default router;
