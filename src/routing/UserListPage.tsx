const UserListPage = () => {
  const users = [
    { id: 1, name: "Tí" },
    { id: 2, name: "Thỏ" },
    { id: 3, name: "Báo" },
  ];
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <a href="#">{user.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default UserListPage;
