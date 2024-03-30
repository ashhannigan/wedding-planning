// current model: relax-mode music does not stop automatically

import React, { useState, useEffect } from 'react';
import ReactDOM, { createRoot } from 'react-dom';
import useSound from 'use-sound';
import vibe from '../audio/vibe.mp3';

function RelaxMode () {
    const [relaxClick] = useSound(vibe);
    return (
        <div>
            <button id="btn-relax" onClick={relaxClick}>Relax Mode</button>
        </div>
    )
}

export default RelaxMode;