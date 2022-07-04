import React from "react";
import projectStyles from "../styles/Projects.module.css";
import ProjectOne from "./Projects/ProjectOne";

const PROJECTS = [
  {
    title: "Twizzle",
    description:
      "A fullstack image sharing social media platform,backend managed with Sanity.io",
    image: "/twizzle.png",
    frameworks: ["ReactJS", "Sanity.io", "Ant Design"],
    url: "https://twizzle-a25fe.web.app",
  },
  {
    title: "Streamline",
    description:
      "A mernstack blog application  with PWA features",
    image: "/streamlinehomepage.png",
    frameworks: ["ReactJS", "MongoDB", "NodeJS", "Ant Design"],
    url: "https://streamline-khaki.vercel.app",
  },
  {
    title: "Solocards",
    description:
      "A fullstack flashcards progressive web application for students",
    image: "/solocardshomepage.png",
    frameworks: ["NextJS", "MongoDB", "NodeJS", "Ant Design"],
    url: "https://solocards.vercel.app",
  },
  {
    title: "JadeonEats",
    description:
      "A mernstack food delivery website made with React and Ant Design",
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
          {PROJECTS.map((PROJECT, index) => (
            <ProjectOne project={PROJECT} key={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
