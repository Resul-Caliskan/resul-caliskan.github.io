// components/Preloader.js
import React from 'react';

const Preloader = () => {
  return (
    <>
      <audio loop id="audioPlayer" style={{ display: 'none' }}>
        <source src="src/mp3/preloader.mp3" type="audio/mp3" />
      </audio>
      <div id="preloader"></div>
      <noscript>Allow Javascript</noscript>
    </>
  );
};

export default Preloader;