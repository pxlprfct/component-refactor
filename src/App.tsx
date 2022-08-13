import { useState } from "react";
import "./App.css";
import ClickMe from "./Counter/before";
import { Counter } from "./Counter/after";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Heya 👋</h1>
      <div className="card">
        <p>Before</p>
        <ClickMe />
      </div>
      <div className="card">
        <p>After</p>
        <Counter />
      </div>
    </div>
  );
}

export default App;
