import { useState, useEffect } from "react";

import Card from "./Card";
import Timer from "./Timer";
import Win from "./Win";

function MainArea({difficulty, theme}) {    

    const [cardArray, setCardArray] = useState([]);

    const [revealedCardsArray, setRevealedCardsArray] = useState([]);

    const [cardsColorArray, setCardsColorArray] = useState([]);
    const [selection1, setSelection1] = useState(null);
    const [selection2, setSelection2] = useState(null);
    const [totalFlips, setTotalFlips] = useState(0);
    const [flipsRemaining, setFlipsRemaining] = useState(
        (difficulty * 4) / 2
    );
    const [canSelect, setCanSelect] = useState(true);

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        let tempCardArray = [];
        for (let i = 0; i < difficulty * 4; i++) {
            tempCardArray.push(i);
        }
        //console.log(tempCardArray);
        let shuffledArray = [];
        let revealedCards = [];
        let tempCardColorArray = [];
        for (let i = 0; i < difficulty * 4; i++) {
            const randomIndex = Math.floor(
                Math.random() * tempCardArray.length
            );
            shuffledArray.push(tempCardArray[randomIndex]);
            tempCardArray.splice(randomIndex, 1);
            revealedCards.push(false);
            tempCardColorArray.push('light');
        }
        //console.log(shuffledArray);
        setCardArray(shuffledArray);
        setRevealedCardsArray(revealedCards);
        setCardsColorArray(tempCardColorArray);
        //console.log(revealedCards);
        // eslint-disable-next-line
    }, []);

    const handleSelection = (value) => {
        if (canSelect) {
            //console.log("clicked", value);
            if (selection1 === null) {
                setSelection1(value);
                let faceCardsArray = revealedCardsArray;
                faceCardsArray[value] = true;
                setRevealedCardsArray(faceCardsArray);
            } else if (selection1 !== value) {
                setSelection2(value);
                let faceCardsArray = revealedCardsArray;
                faceCardsArray[value] = true;
                setRevealedCardsArray(faceCardsArray);
            }
        }
    };

    const hideCards = () => {
        let faceCardsArray = revealedCardsArray;
        faceCardsArray[selection1] = false;
        faceCardsArray[selection2] = false;
        setRevealedCardsArray(faceCardsArray);
    };

    const handleReset = () => {
        setSelection1(null);
        setSelection2(null);
    };

    useEffect(() => {
        //console.log("selection1 changed");
        if (selection1 !== null) {
            console.log(cardsColorArray);
            let newCardColorArray = { ...cardsColorArray };
            newCardColorArray[selection1] = `primary`;
            setCardsColorArray(newCardColorArray);
        }
    }, [selection1]);

    useEffect(() => {
        if (selection1 !== null && selection2 !== null) {
            setTotalFlips((prevState) => prevState + 1);

            let newCardColorArray = { ...cardsColorArray };
            newCardColorArray[selection2] = `primary`;
            setCardsColorArray(newCardColorArray);

            if (selection1 % 8 === selection2 % 8) {
                //console.log("same");

                newCardColorArray = { ...cardsColorArray };
                newCardColorArray[selection1] = `success`;
                newCardColorArray[selection2] = `success`;
                setCardsColorArray(newCardColorArray);

                handleReset();
                setFlipsRemaining((prevState) => prevState - 1);
            } else {
                //console.log("not same");
                setCanSelect(false);
                newCardColorArray = { ...cardsColorArray };
                newCardColorArray[selection1] = `danger`;
                newCardColorArray[selection2] = `danger`;
                setCardsColorArray(newCardColorArray);

                setTimeout(() => {
                    newCardColorArray = { ...cardsColorArray };
                    newCardColorArray[selection1] = 'light';
                    newCardColorArray[selection2] = 'light';
                    setCardsColorArray(newCardColorArray);

                    hideCards();
                    handleReset();
                    setCanSelect(true);
                }, 1000);
            }
        }
    }, [selection2]);

    const handleTimeIncrement = () => {
        setSeconds(prevState => prevState+1);
    }

    useEffect(() => {
        if(seconds === 60){
            setSeconds(0);
            setMinutes(prevState => prevState+1);
        }
    }, [seconds]);
    return (
        <div className="container">
            {flipsRemaining > 0 ? (
                <div className="my-3">
                    <div className={`d-flex justify-content-between py-2 text-${theme === 'light' ? 'dark' : 'light'}`}>
                        <h5>Total Flips: {totalFlips}</h5>
                        <h5 className="d-flex align-items-center">
                            <Timer minutes={minutes} seconds={seconds} incrementTime={handleTimeIncrement} />
                        </h5>
                        <h5>Flips Remaining: {flipsRemaining}</h5>
                    </div>

                    <div className="row">
                        {cardArray.map((element) => {
                            return (
                                <Card
                                    key={element}
                                    value={element}
                                    visible={revealedCardsArray[element]}
                                    handleSelection={handleSelection}
                                    bgColor={cardsColorArray[element]}
                                    theme={theme}
                                />
                            );
                        })}
                    </div>
                </div>
            ) : (
               <Win totalFlips={totalFlips} minutes={minutes} seconds={seconds} theme={theme} />
            )}
        </div>
    );
}

export default MainArea;
