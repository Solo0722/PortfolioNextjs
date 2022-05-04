import React from "react";
import Header from "../components/Header";
import aboutStyles from "../styles/About.module.css";
import { Button } from "antd";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React JS",
  "Next JS",
  "Node JS",
  "Python",
  "React Native",
];

const About = () => {
  return (
    <div className={aboutStyles.container}>
      <Header title={"About"} />
      <main className={aboutStyles.main}>
        <div className={aboutStyles.aboutInfo}>
          <h1>About Me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            reprehenderit, dicta ex non quam esse fugiat praesentium soluta est
            quod, ad aut alias numquam iusto fugit porro eius minima inventore.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
            maxime. Excepturi eius ipsam accusamus iusto nobis eligendi animi
            tempore, odit expedita voluptate ab perspiciatis quaerat aliquid
            tempora commodi deleniti repellendus.
          </p>
        </div>
        <div className={aboutStyles.skillsContainer}>
          <h2>Skills</h2>
          <div>
            {skills.map((skill, index) => (
              <Button type="ghost" key={index}>
                {skill}
              </Button>
            ))}
          </div>
        </div>
        <div className={aboutStyles.testimonialsContainer}></div>
      </main>
    </div>
  );
};

export default About;
