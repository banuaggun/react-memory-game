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
    setcardArray(tempCardArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className='container my-3'>
      <div className="row">
        {cardArray.map((element) => {
          return <Card key={element} value={element} />
        })}
      </div>
      
    </div>
  )
}

export default MainArea