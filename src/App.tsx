import Button from "./Components/Button/Button";
import Alert from "./Components/Alert";
import { useEffect, useState } from "react";
import ListGroup from "./Components/ListGroup";
import "./App.css";
import { BsFillCalendarEventFill } from "react-icons/bs";
import Like from "./Components/Like";
import Message from "./Message";
import produce from "immer";
import NavBar from "./Components/NavBar";
import Cart from "./Components/Cart";
import ExpandableText from "./Components/ExpandableText";
import Form from "./Components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ProductList from "./Components/ProductList";
import axios, { AxiosError, CanceledError } from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    // const fetchUsers = async () => {
    //   try {
    //     const res = await axios.get<User[]>(
    //       "https://jsonplaceholder.typicode.com/xusers"
    //     );
    //     setError("");
    //     setUsers(res.data);
    //   } catch (err) {
    //     setUsers([]);
    //     setError((err as AxiosError).message);
    //   }
    // };

    // fetchUsers();

    const controller = new AbortController();

    setLoading(true);

    // get -> promise -> res / err
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setError("");
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    // return controller.abort();
  }, []);

  const deleteUser = (user: User) => {
    setUsers(users.filter((u) => u.id !== user.id));
    const originalUsers = [...users];
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
