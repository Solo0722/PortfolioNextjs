import React from "react";
import Header from "../components/Header";
import aboutStyles from "../styles/About.module.css";
import { Button } from "antd";
import Image from "next/image";

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
        <div className={aboutStyles.imgContainer}>
          <img src="/myImage.jpg" />
        </div>
        <div className={aboutStyles.aboutInfo}>
          <h1>About Me</h1>
          <img src="/myImage.jpg" className={aboutStyles.responsiveImg} />
          <p>
            Owusu-Ansah Solomon is a{" "}
            <span style={{ color: "#1890FF" }}>full stack web developer</span>{" "}
            who specializes in creating dynamic and responsive full stack
            websites and mobile applications. Solomon is fueled by his passion
            for programming and ambition to better himself as a developer. He
            has 2+ years experience in web development.
          </p>
          <p>
            Solomon considers himself a &#34;forever student&#34;, eager to both
            build on his developing skills and stay in tune with the latest
            technological advancement.
          </p>
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
          <Button type="primary" style={{ marginTop: "50px" }}>
            <a href="/SolomonResume.docx" download>
              Download Resume
            </a>
          </Button>
        </div>
      </main>
    </div>
  );
};

export default About;
