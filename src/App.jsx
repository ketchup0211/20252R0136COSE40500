import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TypingEffect from "./utils/TypingEffect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Merry Christmas</h1>
        <TypingEffect
          text={"We wish you a merry christmas\n and a happy New 2026 !"}
        />
      </div>
    </>
  );
}

export default App;
