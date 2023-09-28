import { Link } from "react-router-dom";

const UserList = () => {
  const users = [
    { id: 1, name: "Tí" },
    { id: 2, name: "Thỏ" },
    { id: 3, name: "Báo" },
  ];

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
