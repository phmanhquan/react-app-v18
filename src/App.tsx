import Button from "./Components/Button/Button";
import Alert from "./Components/Alert";
import { useState } from "react";
import ListGroup from "./Components/ListGroup";
import "./App.css";
import { BsFillCalendarEventFill } from "react-icons/bs";
import Like from "./Components/Like";
import Message from "./Message";
import produce from "immer";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Tí Đù",
    },
    times: ["Morning"],
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
    price: 5,
  });

  const [tags, setTags] = useState(["happy", "cheerful"]);

  const handleClick = () => {
    //// update object
    // setGame({ ...game, price: 10 });
    // setGame({ ...game, price: 10, id: 2 });
    //   setGame({ ...game, times: [...game.times, "Evening"] });
    //   setGame({ ...game, player: { ...game.player, name: "Tèo Em" } });
    // setGame({
    //   ...game,
    //   items: game.items.map((item) =>
    //     item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
    //   ),
    // });

    setGame(
      produce((draft) => {
        const item = draft.items.find((game) => game.id === 1);
        if (item) item.quantity = 5;
      })
    );

    // console.log(game);

    // //add item array
    // setTags([...tags, "he he"]);

    // // remove item array
    // setTags(tags.filter((tag) => tag !== "he he"));

    // //update item array
    // setTags(tags.map((tag) => (tag === "happy" ? "he he" : tag)));
    // console.log(tags);
  };

  return (
    <div>
      {game.items.map((item) => (
        <p key={item.id}>
          {item.title} {item.quantity > 1 ? "hot" : "new"}
        </p>
      ))}
      <Button onClick={handleClick}>Show</Button>
      {/* <Message></Message> */}
    </div>
  );
}

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
