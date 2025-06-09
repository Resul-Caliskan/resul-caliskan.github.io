// components/Main.js
import React from 'react';
import LandingPage from './LandingPage';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';

const Main = () => {
  return (
    <main>
      <LandingPage />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
};

export default Main;