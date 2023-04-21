import { useState } from "react";
import Board from "./components/Board";

const cardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
cardIds.sort(() => 0.5 - Math.random());
console.log(cardIds);

function App() {
  const [moves, setMoves] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(
    parseInt(localStorage.getItem("bestScore") || "0") ||
      Number.MAX_SAFE_INTEGER
  );
  const finishGameCallback = () => {
    const newBestScore = moves < bestScore ? moves : bestScore;
    setBestScore(newBestScore);
    localStorage.setItem("bestScore", "" + newBestScore);
  };

  return (
    <div className="app-container">
      <div style={{padding:'16px 0px'}}>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          RESTART
        </button>
      </div>
      <Board
        setMoves={setMoves}
        finishGameCallback={finishGameCallback}
        cardIds={cardIds}
      />
    </div>
  );
}

export default App;
