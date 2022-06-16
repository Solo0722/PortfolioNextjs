import React from "react";
import projectStyles from "../styles/Projects.module.css";
import ProjectOne from "./Projects/ProjectOne";

const PROJECTS = [
  {
    title: "Solocards",
    description:
      "A fullstack flashcards progressive web application for students, created with NextJS",
    image: "/Solocards1.png",
    frameworks: ["NextJS", "MongoDB", "NodeJS", "Ant Design"],
    url: "https://solocards.vercel.app",
  },
  {
    title: "JadeonEats",
    description:
      "A Mernstack food delivery website made with React and Ant Design",
    image: "/jadeoneats.png",
    frameworks: ["ReactJS", "MongoDB", "NodeJS", "Ant Design"],
    url: "https://jadeoneats.vercel.app",
  },
];

const Projects = () => {
  return (
    <div className={projectStyles.container} id="projects">
      <main className={projectStyles.main}>
        <h1>Projects I have done</h1>
        <div className={projectStyles.projectsContainer}>
          {PROJECTS.map((PROJECT) => (
            <ProjectOne project={PROJECT} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
