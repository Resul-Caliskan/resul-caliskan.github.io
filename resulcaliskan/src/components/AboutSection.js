// components/AboutSection.js
import React from 'react';
import me from "../png/avatar.png"
const AboutSection = () => {
  return (
    <section className="about-section-container" id="about" data-aos="fade-up">
      <div className="about-section">
        <SectionHeading title="AboutMe" />
        <div className="info-dp-section">
          <AboutInfo />
          <div className="dp" data-aos="fade-up">
            <img src={me} alt="Resul Caliskan" tabIndex="0" aria-label="image of vinod" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title }) => (
  <div className="section-heading">
    <h2 className="section-heading-article" tabIndex="0" aria-label={`${title} heading`}>
      &#60;/{title}&#62;
    </h2>
    <p className="sectionHeadingP"></p>
  </div>
);

const AboutInfo = () => (
  <div className="about-info">
    <p tabIndex="0">
      Hi! My name is Resul. I'm a web developer and digital visual artist. I love creating things that exist on the internet. My interest in web development started in 2021 when I decided to upload my digital concept arts online.
    </p>
    <br />
    <p tabIndex="0">
      Instead of creating an online Concepts Art website, i started
      enjoying web development. Creating custom things for web taught
      me a lot about design & development!
    </p>
    <br />
    <p tabIndex="0">
      My main focus these days is building interesting & creative web
      designs, I like to code things from scratch, and enjoy bringing
      ideas to life in the browser.
    </p>
    <ResumeButton />
  </div>
);

const ResumeButton = () => (
  <button className="resume-btn" id="resume-btn" onClick={() => window.open("src/pdf/Vinod's Resume.pdf", "_blank")}>
    <div className="sign">
      <svg viewBox="0 0 640 512">
        <path
          d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
      </svg>
    </div>
    <div className="text">Resume</div>
  </button>
);

export default AboutSection;