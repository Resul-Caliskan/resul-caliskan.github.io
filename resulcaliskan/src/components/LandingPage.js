// components/LandingPage.js
import React from "react";
import "./hover.css";
const LandingPage = () => {
  return (
    <section className="landing-page-container" id="home">
      <div class="section-banner">
        <div id="star-1">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>

        <div id="star-2">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>

        <div id="star-3">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>

        <div id="star-4">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>

        <div id="star-5">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>

        <div id="star-6">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>

        <div id="star-7">
          <div class="curved-corner-star">
            <div id="curved-corner-bottomright"></div>
            <div id="curved-corner-bottomleft"></div>
          </div>
          <div class="curved-corner-star">
            <div id="curved-corner-topright"></div>
            <div id="curved-corner-topleft"></div>
          </div>
        </div>
      </div>

      <div class="container"></div>

      <div className="blob"></div>

      <div className="text-content">
        <HelloFriend />
        <Name />
        <Work />
        <InfoPara />
        <ContactButtons />
      </div>
    </section>
  );
};

const HelloFriend = () => (
  <article id="hello-friend" data-aos="fade-up" data-aos-delay="0">
    {[
      "H",
      "e",
      "l",
      "l",
      "o",
      ,
      "W",
      "o",
      "r",
      "l",
      "d",
      "(",
      ")",
      ";",
      "\u00A0 ",
      "I",
      "'",
      "m",
    ].map((letter, index) => (
      <p key={index} className="jello">
        {letter}
      </p>
    ))}
  </article>
);

const Name = () => (
  <article id="name" data-aos="fade-up" data-aos-delay="200">
    {[
      "R",
      "e",
      "s",
      "u",
      "l",
      " \u00A0 ",
      "Ç",
      "a",
      "l",
      "ı",
      "ş",
      "k",
      "a",
      "n",
    ].map((letter, index) => (
      <p key={index} className="jello">
        {letter}
      </p>
    ))}
  </article>
);

const Work = () => (
  <article id="work" data-aos="fade-up" data-aos-delay="400">
    <div>
      {["S", "o", "f", "t", "w", "a", "r", "e"].map((letter, index) => (
        <p key={index} className="jello">
          {letter}
        </p>
      ))}
    </div>
    <div>
      {["D", "e", "v", "e", "l", "o", "p", "e", "r", "."].map((letter, index) => (
        <p key={`dev-${index}`} className="jello">
          {letter}
        </p>
      ))}
    </div>
  </article>
);

const InfoPara = () => (
  <p id="info-para" data-aos="fade-up" data-aos-delay="600">
    Yazılım geliştiriciyim. Frontend, backend ve AI teknolojileriyle ürün
    geliştiriyorum. Bu sitede öğrendiklerimi ve proje notlarımı paylaşıyorum.
  </p>
);

const ContactButtons = () => (
  <div className="contact-btn-div" data-aos="fade-up" data-aos-delay="800">
    <a href="mailto:resulcaliskansau@gmail.com" tabIndex="-1">
      <button className="letsTalkBtn">
        <p className="letsTalkBtn-text">Let's Talk!</p>
        <span className="letsTalkBtn-BG"></span>
      </button>
    </a>
    {/* <Settings /> */}
  </div>
);

const Settings = () => (
  <div className="setting-container" id="setting-container">
    <input type="checkbox" id="switchforsetting" />
    <label
      htmlFor="switchforsetting"
      className="needtobeinvert"
      id="labelforsetting"
      tabIndex="0"
      aria-label="settings for sound and appearance"
    ></label>
    <div
      className="visualmodetogglebuttoncontainer"
      id="visualmodetogglebuttoncontainer"
    >
      <input type="checkbox" id="switchforvisualmode" />
      <label
        htmlFor="switchforvisualmode"
        id="labelforvisualmode"
        tabIndex="0"
        aria-label="switch appearance"
      ></label>
    </div>
    <div className="soundtogglebuttoncontainer" id="soundtogglebuttoncontainer">
      <input type="checkbox" id="switchforsound" />
      <label
        htmlFor="switchforsound"
        id="labelforsound"
        tabIndex="0"
        aria-label="switch sound"
        className="needtobeinvert"
      ></label>
    </div>
  </div>
);

export default LandingPage;
