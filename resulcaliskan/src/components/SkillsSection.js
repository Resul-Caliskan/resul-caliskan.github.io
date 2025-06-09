// components/SkillsSection.js
import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', img: './src/png/htmllogo.png' },
    { name: 'CSS', img: './src/png/csslogo.png' },
    { name: 'JS', img: './src/png/jslogo.png' },
    { name: 'TAILWIND', img: './src/png/tailwind.png' },
    { name: 'REACTJS', img: './src/png/reactlogo.png' },
    { name: 'NEXTJS', img: './src/png/nextlogo.png' },
    { name: 'NODEJS', img: './src/png/node.png' },
    { name: 'ASTRO', img: './src/png/astro.png' },
    { name: 'GITHUB', img: './src/png/githublogo.png', invert: true },
    { name: 'GIT', img: './src/png/gitlogo.png' },
    { name: 'TINACMS', img: './src/png/tinacms.png' },
    { name: 'CONTENTFUL', img: './src/png/contentfulcms.png' },
    { name: 'C', img: './src/png/clogo.png' },
    { name: 'C++', img: './src/png/cpplogo.png' },
    { name: 'ADOBE PS', img: './src/png/pslogo.png' },
    { name: 'FIGMA', img: './src/png/figmalogo.png' },
    { name: 'ADOBE AI', img: './src/png/ailogo.png' }
  ];

  return (
    <section className="skills-section-container" id="skills">
      <div className="skills-section">
        <SectionHeading title="Skills" />
        <div className="frontend-dev-section">
          <h3 className="frontend-dev-heading" data-aos="fade-up" tabIndex="0"
            aria-label="As a frontend a developer these are the skills i have">
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
    <h2 className="section-heading-article" tabIndex="0" aria-label={`${title} heading`}>
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
      className={`tech-stack-logo ${skill.invert ? 'needtobeinvert' : ''}`} 
    />
    <span className="tooltip">{skill.name}</span>
  </li>
);

export default SkillsSection;