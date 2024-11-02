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

  const handlePadClick = (id) => {
    setDisplay(id);
  };

  const handleKeyPress = useCallback((event) => {
    const key = event.key.toUpperCase();
    const pad = drumPads.find((p) => p.key === key);
    if (pad) {
      console.log("test");
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
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pads">
        {drumPads.map((pad) => (
          <DrumPad
            key={pad.key}
            id={pad.key}
            audioUrl={pad.url}
            handleClick={handlePadClick}
            triggerKey={pad.key}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
