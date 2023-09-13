import Button from "./Components/Button/Button";
import Alert from "./Components/Alert";
import { useState } from "react";
import ListGroup from "./Components/ListGroup";
import "./App.css";
import { BsFillCalendarEventFill } from "react-icons/bs";
import Like from "./Components/Like";

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
  });

  const handleClick = () => {
    //   setGame({ ...game, times: [...game.times, "Evening"] });
    //   setGame({ ...game, player: { ...game.player, name: "Tèo Am" } });
    setGame({
      ...game,
      items: game.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
    console.log(game);
  };

  return (
    <div>
      {/* <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => {}}
      ></ListGroup>
      <BsFillCalendarEventFill color="red" size="40" /> */}
      <Button onClick={handleClick}>Show</Button>
      {/* <Like onClick={() => console.log("Clicked")} /> */}
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
