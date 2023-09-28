import { LoginStatus } from "./auth";
import useTasksStore from "./tasks/store";

const NavBar = () => {
  const taskTotal = useTasksStore((s) => s.tasks.length);
  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{taskTotal}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
