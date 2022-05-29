import { Button } from "antd";
import Image from "next/image";
import styles from "../../styles/ProjectOne.module.css";

const ProjectOne = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={"/Solocards1.png"} width={300} height={300} alt={"notes"} />
      </div>
      <div className={styles.projectInfo}>
        <h2>SoloCards</h2>
        <p>A flashcards application for students, created with NextJS</p>
        <div className={styles.frameworks}>
          <Button type="dashed" size="large">
            NextJS
          </Button>
          <Button type="dashed" size="large">
            Ant Design
          </Button>
        </div>
        <div className={styles.buttonsContainer}>
          <Button
            type="primary"
            size="large"
            href="https://solocards.vercel.app"
            target="_blank"
          >
            Visit
          </Button>
          <Button type="primary" size="large">
            View Code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectOne;
