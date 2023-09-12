import Button from "./Components/Button";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  const handleCloseAlert = () => {
    setAlertVisibility(false);
  };

  return (
    <div>
      {alertVisible && <Alert closeAlert={handleCloseAlert}>My Alert</Alert>}
      <Button
        // color="secondary"
        onClick={() => {
          setAlertVisibility(!alertVisible);
        }}
      >
        He He
      </Button>
    </div>
  );
}

export default App;
