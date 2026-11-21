import { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import Timer from "./Timer";
import Win from "./Win";
import "./game-board.css";

function MainArea({ difficulty, theme }) {
  const numDifficulty = Number(difficulty); 
  const totalCards = numDifficulty * 4; 
  const totalPairs = totalCards / 2; 

  const [cardArray, setCardArray] = useState([]);
  const [revealedCards, setRevealedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [wrongCards, setWrongCards] = useState([]);

  const [selection1, setSelection1] = useState(null);
  const [selection2, setSelection2] = useState(null);
  const [totalFlips, setTotalFlips] = useState(0);
  const [pairsRemaining, setPairsRemaining] = useState(totalPairs);
  const [canSelect, setCanSelect] = useState(true);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const initGame = useCallback(() => {
    const tempArray = Array.from({ length: totalCards }, (_, i) => i);
    const shuffled = [];

    while (tempArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * tempArray.length);
      shuffled.push(tempArray[randomIndex]);
      tempArray.splice(randomIndex, 1);
    }

    setCardArray(shuffled);
    setRevealedCards(new Array(totalCards).fill(false));
    setMatchedCards(new Array(totalCards).fill(false));
    setWrongCards(new Array(totalCards).fill(false));
    setSelection1(null);
    setSelection2(null);
    setTotalFlips(0);
    setPairsRemaining(totalPairs);
    setCanSelect(true);
    setMinutes(0);
    setSeconds(0);
  }, [totalCards, totalPairs]);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const handleSelection = (value) => {
    if (!canSelect || revealedCards[value] || matchedCards[value]) return;

    const updatedRevealed = [...revealedCards];
    updatedRevealed[value] = true;
    setRevealedCards(updatedRevealed);

    if (selection1 === null) {
      setSelection1(value);
    } else if (selection1 !== value) {
      setSelection2(value);
    }
  };

  useEffect(() => {
    if (selection1 !== null && selection2 !== null) {
      setCanSelect(false);
      setTotalFlips((prev) => prev + 1);

      const isMatch = selection1 % totalPairs === selection2 % totalPairs;

      if (isMatch) {
        setMatchedCards((prev) => {
          const updated = [...prev];
          updated[selection1] = true;
          updated[selection2] = true;
          return updated;
        });
        setPairsRemaining((prev) => prev - 1);
        setSelection1(null);
        setSelection2(null);
        setCanSelect(true);
      } else {
        setWrongCards((prev) => {
          const updated = [...prev];
          updated[selection1] = true;
          updated[selection2] = true;
          return updated;
        });

        setTimeout(() => {
          setRevealedCards((prev) => {
            const updated = [...prev];
            updated[selection1] = false;
            updated[selection2] = false;
            return updated;
          });
          setWrongCards((prev) => {
            const updated = [...prev];
            updated[selection1] = false;
            updated[selection2] = false;
            return updated;
          });
          setSelection1(null);
          setSelection2(null);
          setCanSelect(true);
        }, 850);
      }
    }
  }, [selection1, selection2, totalPairs]);

  const handleTimeIncrement = useCallback(() => {
    setSeconds((prev) => {
      if (prev + 1 === 60) {
        setMinutes((m) => m + 1);
        return 0;
      }
      return prev + 1;
    });
  }, []);

  const getCardStatus = (val) => {
    if (matchedCards[val]) return "matched";
    if (wrongCards[val]) return "wrong";
    if (revealedCards[val]) return "selected";
    return "idle";
  };

  return (
    <main className={`board-wrapper theme-${theme}`}>
      {pairsRemaining > 0 ? (
        <div className="board-container">
          
          <div className="game-hud">
            <div className="hud-stat">
              <span className="hud-label">Moves</span>
              <span className="hud-value">{totalFlips}</span>
            </div>

            <div className="hud-timer">
              <Timer
                minutes={minutes}
                seconds={seconds}
                incrementTime={handleTimeIncrement}
              />
            </div>

            <div className="hud-stat">
              <span className="hud-label">Remaining</span>
              <span className="hud-value">{pairsRemaining}</span>
            </div>

            <button
              type="button"
              className="hud-restart-btn"
              onClick={initGame}
              title="Restart Game"
              aria-label="Restart Game"
            >
              <i className="bi bi-arrow-counterclockwise"></i>
            </button>
          </div>

          <div className={`cards-grid grid-diff-${numDifficulty}`}>
            {cardArray.map((element) => (
              <Card
                key={element}
                value={element}
                isFlipped={revealedCards[element] || matchedCards[element]}
                status={getCardStatus(element)}
                handleSelection={handleSelection}
                modValue={totalPairs}
              />
            ))}
          </div>
        </div>
      ) : (
        <Win
          totalFlips={totalFlips}
          minutes={minutes}
          seconds={seconds}
          theme={theme}
          onRestart={initGame}
        />
      )}
    </main>
  );
}

export default MainArea;
