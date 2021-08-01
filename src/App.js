import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import RotateLeftIcon from "@material-ui/icons/RotateLeft";
function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <div className="count">{number}</div>
        <div className="action">
          <div>
            <Button
              variant="success"
              className="CounterButtons"
              size="lg"
              onClick={() => setNumber((number) => number + 1)}
              style={{ fontSize: 40 }}
            >
              +
            </Button>
          </div>
          <div>
            <Button
              variant="warning"
              className="CounterButtons"
              size="lg"
              onClick={() => setNumber(0)}
            >
              <RotateLeftIcon className="reset" style={{ fontSize: 40 }} />
            </Button>
          </div>
          <div>
            <Button
              variant="danger"
              className="CounterButtons"
              size="lg"
              style={{ fontSize: 40 }}
              onClick={() =>
                setNumber((number) => {
                  if (number > 0) return number - 1;
                  else return number;
                })
              }
            >
              -
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
