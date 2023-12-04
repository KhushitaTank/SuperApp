import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "../HomeComponent/timerNotes.css";
import upwardArrow from "../SVG/upwardArrow.svg";
import downwardArrow from "../SVG/downwardArrow.svg";
import useSound from "use-sound";

import tictac from "../sounds/tic-tac.mp3";

export default function Notes() {
  const [hours, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [second, setSecond] = useState(0);
  const [trigger, setTrigger] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [play, { stop }] = useSound(tictac, {
    volume: 1,
    duration: 500,
  });

  const renderProp = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return `${zeroPad(hours, 2)}:${zeroPad(minutes, 2)}:${zeroPad(seconds, 2)}`;
  };

  const handleStart = () => {
    mTrigger();
    setIsRunning(true);
    play();
    setTimeout(() => {
      stop();
    }, 5000);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const mTrigger = () => {
    setTrigger((i) => i + (1 % 10));
  };
  const complete = () => {
    mTrigger();
    setIsRunning(false);
    setHour(0);
    setMinutes(0);
    setSecond(0);
    play();
    setTimeout(() => {
      stop();
    }, 5000);
  };

  return (
    <div className="timer">
      <div className="countdown-Container">
        <CountdownCircleTimer
          key={trigger}
          isPlaying={isRunning}
          size={235}
          strokeWidth={6}
          colors={["#FF6A6A"]}
          duration={hours * 3600 + minutes * 60 + second}
          onComplete={() => complete()}>
          {renderProp}
        </CountdownCircleTimer>
      </div>
      <div className="tickerInputButtonContainer">
        <div className="tickerInputContainer">
          <TickerInput
            state={hours}
            setState={setHour}
            max={24}
            title={"Hours"}
          />

          <TickerInput
            state={minutes}
            setState={setMinutes}
            max={60}
            title={"Minutes"}
          />

          <TickerInput
            state={second}
            setState={setSecond}
            max={60}
            title={"Seconds"}
          />
        </div>
        <div className="ButtonContainer">
          {isRunning ? (
            <button className="startStopBtn" onClick={handleStop}>
              Stop
            </button>
          ) : (
            <button className="startStopBtn" onClick={handleStart}>
              Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const TickerInput = ({ state, setState, max, title }) => {
  const increase = () => {
    if (state + 1 > max) setState(0);
    else setState(state + 1);
  };

  const decrease = () => {
    if (state - 1 < 0) setState(max);
    else setState(state - 1);
  };
  return (
    <div className="IncreaseDecreaseComponent">
      <h3 className="TileTimer">{title}</h3>
      <button className="IncDecBtn" onClick={() => increase()}>
        <img src={upwardArrow} />
      </button>
      <p className="numberInput"> {zeroPad(state, 2)}</p>
      <button className="IncDecBtn" onClick={() => decrease()}>
        <img src={downwardArrow} />
      </button>
    </div>
  );
};

const zeroPad = (num, places) => String(num).padStart(places, "0");
