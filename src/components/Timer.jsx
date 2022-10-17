import {useEffect} from 'react'



function Timer({minutes, seconds, incrementTime}){

  useEffect(() => {
    const Interval = setInterval(() => {
      incrementTime();
    }, 1000);
    return () => {
      clearInterval(Interval);
    }
  }, []);
  return (
    <>
      <i className="bi bi-stopwatch"></i>
      {minutes < 10 ? "0"+minutes : minutes}:{seconds < 10 ? "0"+seconds : seconds}
    </>
  )
}

export default Timer