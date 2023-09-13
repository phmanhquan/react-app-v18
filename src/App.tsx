import Button from "./Components/Button/Button";
import Alert from "./Components/Alert";
import { useState } from "react";
import ListGroup from "./Components/ListGroup";
import "./App.css";
import { BsFillCalendarEventFill } from "react-icons/bs";
import Like from "./Components/Like";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = ["New York", "Los Angeles", "San Francisco"];

  const handleCloseAlert = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      {/* <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => {}}
      ></ListGroup>
      <BsFillCalendarEventFill color="red" size="40" /> */}
      {/* <Button onClick={() => {}}>Supper Button</Button> */}
      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
