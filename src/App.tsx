import Button from "./Components/Button/Button";
import Alert from "./Components/Alert";
import { useEffect, useReducer, useState } from "react";
import ListGroup from "./Components/ListGroup";
import "./App.css";
import { BsFillCalendarEventFill } from "react-icons/bs";
import Like from "./Components/Like";
import Message from "./Message";
import produce from "immer";
// import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import ExpandableText from "./Components/ExpandableText";
import Form from "./Components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ProductList from "./Components/ProductList";
// import axios, { AxiosError, CanceledError } from "axios";
import apiClient, { CanceledError } from "./services/api-client";
import userService, { User } from "./services/user-service";
import useUsers from "./hooks/useUsers";
import TodoList from "./react-query/TodoList";
import PostList from "./react-query/PostList";
import TodoForm from "./react-query/TodoForm";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";
import LoginStatus from "./state-management/LoginStatus";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import AuthProvider from "./state-management/AuthProvider";
import TasksProvider from "./state-management/TasksProvider";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar></NavBar>
        <HomePage></HomePage>
      </TasksProvider>
    </AuthProvider>
  );
}

// function App() {
//   const [tasks, dispatch] = useReducer(tasksReducer, []);

//   return (
//     <LoginStatus></LoginStatus>
//     // <TaskList></TaskList>
//     // <Counter></Counter>
//     // <PostList></PostList>;
//     // <>
//     //   <TodoForm></TodoForm>
//     //   <TodoList></TodoList>
//     // </>
//   );
// }

// function App() {
//   const { users, error, isLoading, setUsers, setError } = useUsers();

//   const deleteUser = (user: User) => {
//     setUsers(users.filter((u) => u.id !== user.id));
//     const originalUsers = [...users];

//     userService.delete(user.id).catch((err) => {
//       setError(err.message);
//       setUsers(originalUsers);
//     });
//   };

//   const addUser = () => {
//     const originalUsers = [...users];
//     const newUser = { id: 0, name: "jacky" };
//     setUsers([newUser, ...users]);

//     userService
//       .create(newUser)
//       .then(({ data: savedUser }) => {
//         setUsers([savedUser, ...users]);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setUsers(originalUsers);
//       });
//   };

//   const updateUser = (user: User) => {
//     const updatedUser = { ...user, name: user.name + "!" };
//     setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
//     const originalUsers = [...users];

//     userService.update(updatedUser).catch((err) => {
//       setError(err.message);
//       setUsers(originalUsers);
//     });
//   };

//   return (
//     <div>
//       {error && <p className="text-danger">{error}</p>}
//       {isLoading && <div className="spinner-border"></div>}
//       <button className="btn btn-primary mb-3" onClick={() => addUser()}>
//         Add
//       </button>
//       <ul className="list-group">
//         {users.map((user) => (
//           <li
//             key={user.id}
//             className="list-group-item d-flex justify-content-between"
//           >
//             {user.name}
//             <div>
//               <button
//                 className="btn btn-outline-secondary mx-1"
//                 onClick={() => updateUser(user)}
//               >
//                 Update
//               </button>
//               <button
//                 className="btn btn-outline-danger"
//                 onClick={() => deleteUser(user)}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const connect = () => console.log("connecting");
// const disconnect = () => console.log("disconnecting");

// function App() {
//   // const [category, setCategory] = useState("");
//   useEffect(() => {
//     connect();
//     return () => disconnect();
//   });

//   return (
//     <div>
//       {/* <select
//         className="form-select"
//         onChange={(event) => setCategory(event.target.value)}
//       >
//         <option value=""></option>
//         <option value="product 1">product 1</option>
//         <option value="product 2">product 2</option>
//         <option value="product 3">product 3</option>
//       </select>
//       <ProductList category={category}></ProductList> */}
//     </div>
//   );
// }

// function App() {
//   // const [cartItems, setCartItems] = useState([
//   //   "Product 1",
//   //   "Product 2",
//   //   "Product 3",
//   //   "Product 4",
//   // ]);

//   // const handleRemove = () => {
//   //   if (cartItems.length > 0) {
//   //     let condition = "Product " + cartItems.length.toString();
//   //     console.log(condition);
//   //     setCartItems(cartItems.filter((item) => item !== condition));
//   //   }
//   // };

//   const data = [
//     { id: 1, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 2, description: "bbb", amount: 10, category: "Groceries" },
//     { id: 3, description: "ccc", amount: 10, category: "Utilities" },
//     { id: 4, description: "ddd", amount: 10, category: "Entertainment" },
//   ];

//   const [nextId, setNextId] = useState(5);
//   const [categorySelected, setCategorySelected] = useState("");
//   const [expenses, setExpenses] = useState(data);
//   const [visibleExpenses, setVisibleExpenses] = useState(expenses);

//   const handleDelete = (id: number) => {
//     setExpenses(expenses.filter((expense) => expense.id !== id));
//     setVisibleExpenses(visibleExpenses.filter((expense) => expense.id !== id));
//   };

//   const handleReload = () => {
//     setExpenses(data);
//     setVisibleExpenses(data);
//   };

//   const handleFilter = (value: string) => {
//     value === ""
//       ? setExpenses(visibleExpenses)
//       : setExpenses(
//           visibleExpenses.filter((expense) => expense.category == value)
//         );
//     setCategorySelected(value);
//   };

//   return (
//     <div>
//       <div className="mb-5">
//         <ExpenseForm
//           onSubmit={(newExpense) => {
//             if (
//               categorySelected === "" ||
//               categorySelected == newExpense.category
//             )
//               setExpenses([...expenses, { ...newExpense, id: nextId }]);

//             setVisibleExpenses([
//               ...visibleExpenses,
//               { ...newExpense, id: nextId },
//             ]);
//             setNextId(nextId + 1);
//             console.log(nextId);
//           }}
//         ></ExpenseForm>
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(value) => handleFilter(value)}
//         ></ExpenseFilter>
//       </div>
//       <div className="mb-3">
//         {" "}
//         <ExpenseList
//           expenses={expenses}
//           onDelete={(id) => handleDelete(id)}
//           onReload={() => handleReload()}
//         ></ExpenseList>
//       </div>
//     </div>
//   );
// }

// function App() {
//   const [cartItems, setCartItems] = useState([
//     "Product 1",
//     "Product 2",
//     "Product 3",
//     "Product 4",
//   ]);

//   const handleRemove = () => {
//     if (cartItems.length > 0) {
//       let condition = "Product " + cartItems.length.toString();
//       console.log(condition);
//       setCartItems(cartItems.filter((item) => item !== condition));
//     }
//   };

//   return (
//     <div>
//       <NavBar cartItemCount={cartItems.length} />
//       <Cart
//         cartItems={cartItems}
//         onRemove={handleRemove}
//         onClear={() => setCartItems([])}
//       />
//       <ExpandableText
//         maxChars={10}
//         children=" Include popular icons in your React projects easily with react-icons,
//       which utilizes ES6 imports that allows you to include only the icons that
//       your project is using.Include popular icons in your React projects easily
//       with react-icons, which utilizes ES6 imports that allows you to include
//       only the icons that your project is using.Include popular icons in your
//       React projects easily with react-icons, which utilizes ES6 imports that
//       allows you to include only the icons that your project is using.Include
//       popular icons in your React projects easily with react-icons, which
//       utilizes ES6 imports that allows you to include only the icons that your
//       project is using.Include popular icons in your React projects easily with
//       react-icons, which utilizes ES6 imports that allows you to include only
//       the icons that your project is using."
//       ></ExpandableText>
//     </div>
//   );
// }

// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "Tí Đù",
//     },
//     times: ["Morning"],
//     items: [
//       { id: 1, title: "Product 1", quantity: 1 },
//       { id: 2, title: "Product 2", quantity: 1 },
//     ],
//     price: 5,
//   });

//   const [tags, setTags] = useState(["happy", "cheerful"]);

//   const handleClick = () => {
//     //// update object
//     // setGame({ ...game, price: 10 });
//     // setGame({ ...game, price: 10, id: 2 });
//     //   setGame({ ...game, times: [...game.times, "Evening"] });
//     //   setGame({ ...game, player: { ...game.player, name: "Tèo Em" } });
//     // setGame({
//     //   ...game,
//     //   items: game.items.map((item) =>
//     //     item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//     //   ),
//     // });

//     setGame(
//       produce((draft) => {
//         const item = draft.items.find((game) => game.id === 1);
//         if (item) item.quantity = 5;
//       })
//     );

//     // console.log(game);

//     // //add item array
//     // setTags([...tags, "he he"]);

//     // // remove item array
//     // setTags(tags.filter((tag) => tag !== "he he"));

//     // //update item array
//     // setTags(tags.map((tag) => (tag === "happy" ? "he he" : tag)));
//     // console.log(tags);
//   };

//   return (
//     <div>
//       {game.items.map((item) => (
//         <p key={item.id}>
//           {item.title} {item.quantity > 1 ? "hot" : "new"}
//         </p>
//       ))}
//       <Button onClick={handleClick}>Show</Button>
//       {/* <Message></Message> */}
//     </div>
//   );
// }

// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);
//   const items = ["New York", "Los Angeles", "San Francisco"];
//   const [isVisible, setVisibility] = useState(false);

//   const handleCloseAlert = () => {
//     setAlertVisibility(false);
//   };

//   const handleClick = () => {
//     setVisibility(true);
//     console.log(isVisible);
//   };

//   return (
//     <div>
//       {/* <ListGroup
//         heading="Miami"
//         items={items}
//         onSelectItem={() => {}}
//       ></ListGroup>
//       <BsFillCalendarEventFill color="red" size="40" /> */}
//       <Button onClick={handleClick}>Show</Button>
//       {/* <Like onClick={() => console.log("Clicked")} /> */}
//     </div>
//   );
// }

export default App;
