import React from "react";
import Header from "../components/Header";
import projectStyles from "../styles/Projects.module.css";
import Project from "../components/Project";

const projects = [
  {
    title: "Card Title",
    description: "This is the description",
  },
  {
    title: "Card Title",
    description: "This is the description",
  },
  {
    title: "Card Title",
    description: "This is the description",
  },
  {
    title: "Card Title",
    description: "This is the description",
  },
  {
    title: "Card Title",
    description: "This is the description",
  },
  {
    title: "Card Title",
    description: "This is the description",
  },
  {
    title: "Card Title",
    description: "This is the description",
  },
  {
    title: "Card Title",
    description: "This is the description",
  },
  {
    title: "Card Title",
    description: "This is the description",
  },
  {
    title: "Card Title",
    description: "This is the description",
  },
  {
    title: "Card Title",
    description: "This is the description",
  },
  {
    title: "Card Title",
    description: "This is the description",
  },
  {
    title: "Card Title",
    description: "This is the description",
  },
];

const Projects = () => {
  return (
    <div className={projectStyles.container}>
      <Header title={"Projects"} />
      <main className={projectStyles.main}>
        <h1>Projects I have done</h1>
        <div className={projectStyles.projectsContainer}>
          {projects.map((project, index) => (
            <Project project={project} key={index} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
