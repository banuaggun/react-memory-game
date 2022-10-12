import { useState, useEffect } from "react";
import Card from "./Card";

function MainArea(props) {
    const { difficulty } = props;
    //console.log(difficulty);

    const [cardArray, setCardArray] = useState([]);
    const [revealedCardsArray, setRevealedCardsArray] = useState([]);
    const [selection1, setSelection1] = useState(null);
    const [selection2, setSelection2] = useState(null);

    //const [revealedCardsArray, setRevealedCardsArray] = useState([]);

    useEffect(() => {
        let tempCardArray = [];
        for (let i = 0; i < difficulty * difficulty; i++) {
            tempCardArray.push(i);
        }
        console.log(tempCardArray);
        let shuffledArray = [];
        let revealedCards = [];
        for (let i = 0; i < difficulty * difficulty; i++) {
            const randomIndex = Math.floor(
                Math.random() * tempCardArray.length
            );
            shuffledArray.push(tempCardArray[randomIndex]);
            tempCardArray.splice(randomIndex, 1);
            revealedCards.push(false);
        }
        console.log(shuffledArray);
        setCardArray(shuffledArray);
        setRevealedCardsArray(revealedCards);
        console.log(revealedCards);
        // eslint-disable-next-line
    }, []);

    const handleSelection = (value) => {
        console.log("clicked", value);
        if (selection1 === null) {
            setSelection1(value);
            let visibleCardsArray = revealedCardsArray;
            visibleCardsArray[value] = true;
            setRevealedCardsArray(visibleCardsArray);
        } else {
            setSelection2(value);
            let visibleCardsArray = revealedCardsArray;
            visibleCardsArray[value] = true;
            setRevealedCardsArray(visibleCardsArray);
        }
    };

    const hideCards = () => {
        let visibleCardsArray = revealedCardsArray;
        visibleCardsArray[selection1] = false;
        visibleCardsArray[selection2] = false;
        setRevealedCardsArray(visibleCardsArray);
    };
    const handleReset = () => {
        setSelection1(null);
        setSelection2(null);
    };
    useEffect(() => {
        if (selection1 !== null && selection2 !== null) {
            if (selection1 % 8 === selection2 % 8) {
                console.log("same");
                handleReset();
            }
        } else {
            console.log("not same");
            setTimeout(() => {
                hideCards();
                handleReset();
            }, 1000);
        }
    }, [selection2]);

    return (
        <div className="container my-3">
            <h3>Selection1 : {selection1}</h3>
            <h3>Selection2 : {selection2}</h3>
            <div className="row">
                {cardArray.map((element) => {
                    return (
                        <Card
                            key={element}
                            value={element}
                            visible={revealedCardsArray[element]}
                            handleSelection={handleSelection}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default MainArea;
