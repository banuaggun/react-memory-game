import {useState, useEffect} from 'react'
import Card from './Card'

function MainArea(props) {
  const {difficulty} = props;
  //console.log(difficulty);

  const [cardArray, setcardArray] = useState([]);

  useEffect(() => {
    let tempCardArray = [];
    for(let i = 0; i < difficulty * difficulty; i++){
      tempCardArray.push(i);
    }
    console.log(tempCardArray);
    let shuffledArray = [];
    for(let i = 0; i < difficulty * difficulty; i++){
      const randomIndex = Math.floor(Math.random()*tempCardArray.length);
      shuffledArray.push(tempCardArray[randomIndex]);
      tempCardArray.splice(randomIndex, 1);
    }
    console.log(shuffledArray);
    setcardArray(shuffledArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='container my-3'>
      <div className="row">
        {cardArray.map((element) => {
          return <Card key={element} value={element} visible={false} />
        })}
      </div>
      
    </div>
  )
}

export default MainArea