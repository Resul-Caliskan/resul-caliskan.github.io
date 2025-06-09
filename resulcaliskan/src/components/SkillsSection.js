// src/components/SkillsSection.js
import React from "react";

// Görselleri import et
import htmlLogo from "../png/htmllogo.png";
import cssLogo from "../png/csslogo.png";
import jsLogo from "../png/jslogo.png";
import tailwindLogo from "../png/tailwind.png";
import reactLogo from "../png/reactlogo.png";
import nextLogo from "../png/nextlogo.png";
import nodeLogo from "../png/node.png";
import unity from "../png/unity.png";
import githubLogo from "../png/githublogo.png";
import gitLogo from "../png/gitlogo.png";
import cLogo from "../png/clogo.png";
import cppLogo from "../png/cpplogo.png";
import python from "../png/python.png";
import figmaLogo from "../png/figmalogo.png";

const SkillsSection = () => {
  const skills = [
    { name: "HTML", img: htmlLogo },
    { name: "CSS", img: cssLogo },
    { name: "JS", img: jsLogo },
    { name: "C#", img: cLogo },
    { name: "Python", img: python },
    { name: "C++", img: cppLogo },
    { name: "TAILWIND", img: tailwindLogo },
    { name: "REACTJS", img: reactLogo },
    { name: "NEXTJS", img: nextLogo },
    { name: "NODEJS", img: nodeLogo },
    { name: "Unity", img: unity },
    { name: "GITHUB", img: githubLogo, invert: true },
    { name: "GIT", img: gitLogo },
    { name: "FIGMA", img: figmaLogo },
  ];

  return (
    <section className="skills-section-container" id="skills">
      <div className="skills-section">
        <SectionHeading title="Skills" />
        <div className="frontend-dev-section">
          <h3
            className="frontend-dev-heading"
            data-aos="fade-up"
            tabIndex="0"
            aria-label="As a frontend developer these are the skills I have"
          >
            Tech Stack
          </h3>
          <ul className="tech-stack-wrapper">
            {skills.map((skill, index) => (
              <SkillBox key={index} skill={skill} delay={index * 100} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const SectionHeading = ({ title }) => (
  <div className="section-heading" data-aos="fade-up">
    <h2
      className="section-heading-article"
      tabIndex="0"
      aria-label={`${title} heading`}
    >
      &#60;/{title}&#62;
    </h2>
    <p className="sectionHeadingP"></p>
  </div>
);

const SkillBox = ({ skill, delay }) => (
  <li className="tech-stack-box" data-aos="fade-up" data-aos-delay={delay}>
    <img
      src={skill.img}
      alt={`${skill.name} skill`}
      className={`tech-stack-logo ${skill.invert ? "needtobeinvert" : ""}`}
    />
    <span className="tooltip">{skill.name}</span>
  </li>
);

export default SkillsSection;

