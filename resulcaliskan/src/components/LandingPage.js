// components/LandingPage.js
import React from 'react';

const LandingPage = () => {
  return (
    <section className="landing-page-container" id="home">
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
    {['H', 'e', 'l', 'l', 'o', '(', ')', ';', ' ', 'I', "'", 'm'].map((letter, index) => (
      <p key={index} className="jello">{letter}</p>
    ))}
  </article>
);

const Name = () => (
  <article id="name" data-aos="fade-up" data-aos-delay="200">
    {['R', 'e', 's', 'u', 'l', ' ', 'C', 'a', 'l', 'i', 's', 'k', 'a','n'].map((letter, index) => (
      <p key={index} className="jello">{letter}</p>
    ))}
  </article>
);

const Work = () => (
  <article id="work" data-aos="fade-up" data-aos-delay="400">
    <div><p className="jello">I</p></div>
    <div>{['d', 'e', 's', 'i', 'g', 'n'].map((letter, index) => (
      <p key={index} className="jello">{letter}</p>
    ))}</div>
    <div><p className="jello">&</p></div>
    <div>{['c', 'o', 'd', 'e'].map((letter, index) => (
      <p key={index} className="jello">{letter}</p>
    ))}</div>
    <div>{['f', 'o', 'r'].map((letter, index) => (
      <p key={index} className="jello">{letter}</p>
    ))}</div>
    <div>{['w', 'e', 'b', '.'].map((letter, index) => (
      <p key={index} className="jello">{letter}</p>
    ))}</div>
  </article>
);

const InfoPara = () => (
  <p id="info-para" data-aos="fade-up" data-aos-delay="600">
    Web Developer with experience of Digital Concept Arts, Frontend Web
    Designs. I Love fun Web UI, collaboration and making products.<br /><br />
    I value simple content structure, clean design patterns, and
    thoughtful interactions.
  </p>
);

const ContactButtons = () => (
  <div className="contact-btn-div" data-aos="fade-up" data-aos-delay="800">
    <a href="mailto:infovinodjangid@gmail.com" tabIndex="-1">
      <button className="letsTalkBtn">
        <p className="letsTalkBtn-text">Let's Talk!</p>
        <span className="letsTalkBtn-BG"></span>
      </button>
    </a>
    <Settings />
  </div>
);

const Settings = () => (
  <div className="setting-container" id="setting-container">
    <input type="checkbox" id="switchforsetting" />
    <label htmlFor="switchforsetting" className="needtobeinvert" id="labelforsetting" tabIndex="0"
      aria-label="settings for sound and appearance"></label>
    <div className="visualmodetogglebuttoncontainer" id="visualmodetogglebuttoncontainer">
      <input type="checkbox" id="switchforvisualmode" />
      <label htmlFor="switchforvisualmode" id="labelforvisualmode" tabIndex="0"
        aria-label="switch appearance"></label>
    </div>
    <div className="soundtogglebuttoncontainer" id="soundtogglebuttoncontainer">
      <input type="checkbox" id="switchforsound" />
      <label htmlFor="switchforsound" id="labelforsound" tabIndex="0" aria-label="switch sound"
        className="needtobeinvert"></label>
    </div>
  </div>
);

export default LandingPage;