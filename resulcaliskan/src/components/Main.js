// components/Main.js
import React from 'react';
import LandingPage from './LandingPage';
import ProjectsSection from './ProjectsSection';
import HomeBlog from './HomeBlog';

const Main = () => {
  return (
    <main>
      <LandingPage />
      <ProjectsSection />
      <HomeBlog />
    </main>
  );
};

export default Main;

