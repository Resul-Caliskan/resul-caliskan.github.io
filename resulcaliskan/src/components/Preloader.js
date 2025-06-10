// components/Preloader.js
import React from "react";
import "./hover.css";
const Preloader = () => {
  return (
    <>
      <audio loop id="audioPlayer" style={{ display: "none" }}>
        <source src="src/mp3/preloader.mp3" type="audio/mp3" />
      </audio>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // sayfanın tamamını kaplaması için
          flexDirection: "column",
        }}
      >
        <div class="wrapper">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
          <div class="shadow"></div>
        </div>
      </div>
      <noscript>Allow Javascript</noscript>
    </>
  );
};

export default Preloader;
