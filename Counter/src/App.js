import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);
  const [isCounterPause, setIsCounterPause] = useState(true);
  const startCounter = function () {
    setIsCounterPause(false);
  };

  const pauseCounter = function () {
    setIsCounterPause(true);
  };

  const resumeCounter = function () {
    setIsCounterPause(false);
  };

  const resetCounter = function () {
    setCounter(0);
  };

  useEffect(() => {
    let timer;
    if (!isCounterPause) {
      timer = setInterval(() => {
        setCounter(() => counter + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isCounterPause, counter]);

  return (
    <div className="App">
      {counter}
      <br />
      <button onClick={startCounter}>Start</button>
      <button onClick={pauseCounter}>Pause</button>
      <button onClick={resumeCounter}>Resume</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
}
