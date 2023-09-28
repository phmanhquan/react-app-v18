import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "users", element: <UserListPage></UserListPage> },
      { path: "users/:id", element: <UserDetailPage></UserDetailPage> },
    ],
  },
  { path: "/contact", element: <ContactPage></ContactPage> },
]);

export default router;
