import { useEffect } from "react";

function Timer({ minutes, seconds, incrementTime }) {
  useEffect(() => {
    const interval = setInterval(() => {
      incrementTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [incrementTime]);

  return (
    <span className="timer-pill">
      <i className="bi bi-stopwatch-fill me-1"></i>
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </span>
  );
}

export default Timer;
