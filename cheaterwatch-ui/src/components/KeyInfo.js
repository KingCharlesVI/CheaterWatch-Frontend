// src/components/KeyInfo.js
import React from 'react';
import '../styles/KeyInfo.css'; // Import styles

const KeyInfo = () => {
  return (
    <div className="key-info">
      <span className="certain">Certain</span> means: This user is definitely cheating. Report them instantly if you see them in-game.
      <br />
      <span className="likely">Likely</span> means: We're pretty sure that this person is cheating. Report them if they seem suspicious.
    </div>
  );
};

export default KeyInfo;