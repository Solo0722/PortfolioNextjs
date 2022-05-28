import React from "react";
import projectStyles from "../styles/Projects.module.css";
import ProjectOne from "./Projects/ProjectOne";

const Projects = () => {
  return (
    <div className={projectStyles.container} id="projects">
      <main className={projectStyles.main}>
        <h1>Projects I have done</h1>
        <div className={projectStyles.projectsContainer}>
          <ProjectOne/>
        </div>
      </main>
    </div>
  );
};

export default Projects;
