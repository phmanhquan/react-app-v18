import Button from "./Components/Button";
import Alert from "./Components/Alert";
import { useState } from "react";
import ListGroup from "./Components/ListGroup";
import "./App.css";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = ["New York", "Los Angeles", "San Francisco"];

  const handleCloseAlert = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={() => {}}
      ></ListGroup>
    </div>
  );
}

export default App;
