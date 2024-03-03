import React from "react";

import ErrorThrower from "ErrorThrower";
import Me from './Me';
import About from './About';
import WorkExperience from './WorkExperience';
import SideProjects from './SideProjects';
import Education from './Education';
import Contact from './Contact';

const CV = () => {
  return (
    <ErrorThrower componentName="CV">
      <main id="cv" className="md:container grid grid-cols-cv mb-24 mt-12">
        <Me />
        <About />
        <WorkExperience />
        <SideProjects />
        <Education />
        <Contact />
      </main>
    </ErrorThrower>
  );
};

export default CV;
