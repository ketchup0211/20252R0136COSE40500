import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TypingEffect from "./utils/TypingEffect";
import ChristmasRBTree from "./utils/ChristmasRBTree";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ChristmasRBTree
          values={[10, 7, 15, 5, 9, 13, 18, 6, 8, 11, 14]}
          width={820}
          height={560}
          showKeys={false} // 키 보이게 하려면 true
          caption="Developer Tree: Red-Black Christmas 🎄"
        />
        <h1>Merry Christmas</h1>
        <TypingEffect
          text={"We wish you a merry christmas\n and a happy New 2026 !"}
        />
      </div>
    </>
  );
}

export default App;
