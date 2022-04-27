import React from "react";
import Header from "../components/Header";
import projectStyles from "../styles/Projects.module.css";

const Projects = () => {
  return (
    <div className={projectStyles.container}>
      <Header title={"Projects"} />
      <main className={projectStyles.main}>Hello world Projects</main>
    </div>
  );
};

export default Projects;
