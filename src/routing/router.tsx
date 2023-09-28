import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage></HomePage> },
  { path: "/users", element: <UserListPage></UserListPage> },
  { path: "/users/:id", element: <UserDetailPage></UserDetailPage> },
  { path: "/contact", element: <ContactPage></ContactPage> },
]);

export default router;
