import React, { useRef } from 'react';

function DrumPad({ id, audioUrl, handleClick, triggerKey }) {
    const audioRef = useRef(null);

    const handlePadClick = () => {
        audioRef.current.play();
        handleClick(id);
    };

    return (
        <div className="drum-pad"  onClick={handlePadClick}>
            {triggerKey}
            <audio className="clip" id={id} src={audioUrl} ref={audioRef}></audio>
        </div>
    );
}

export default DrumPad;
