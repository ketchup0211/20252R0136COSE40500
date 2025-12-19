import "./App.css";
import StarTree from "./utils/StarTree";
import TypingEffect from "./utils/TypingEffect";

function App() {
  return (
    <>
      <div>
        <StarTree />
        <h1>🎄 Merry Christmas 🎄</h1>
        <TypingEffect
          text={"We wish you a merry christmas\n and a happy New 2026 !"}
        />
      </div>
    </>
  );
}

export default App;
