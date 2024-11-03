import React, { useCallback, useEffect, useState } from "react";
import DrumPad from "./components/DrumPad";
import "./App.css";

const drumPads = [
  {
    key: "Q",
    id: "Heater-1",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    key: "W",
    id: "Heater-2",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    key: "E",
    id: "Heater-3",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    key: "A",
    id: "Heater-4_1",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  },
  {
    key: "S",
    id: "Heater-6",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    key: "D",
    id: "Dsc_Oh",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    id: "Kick_n_Hat",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    id: "RP4_KICK_1",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    id: "Cev_H2",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },
];

function App() {
  const [display, setDisplay] = useState("");

  const handlePadClick = (key) => {
    console.log(key);
    setDisplay(key);
  };

  const handleKeyPress = useCallback((event) => {
    const key = event.key.toUpperCase();
    const pad = drumPads.find((p) => p.key === key);
    if (pad) {
      console.log(pad);
      console.log(pad.key);
      const audioElement = document.getElementById(pad.key);
      audioElement.play();
      handlePadClick(pad.id);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <div id="drum-container">
        <div id="drum-machine">
          <div className="drum-pads">
            {drumPads.map((pad) => (
              <DrumPad
                key={pad.key}
                id={pad.id}
                audioUrl={pad.url}
                handleClick={handlePadClick}
                triggerKey={pad.key}
              />
            ))}
          </div>
          <p id="display">{display}</p>
        </div>
      </div>
      <a
        id="github-link"
        href="https://github.com/Adrien-25/clock_pomodoro.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          version="1.1"
          data-view-component="true"
          height="25px"
          width="25"
          fill="white"
        >
          <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
        </svg>
        GitHub Repo
      </a>
    </>
  );
}

export default App;
