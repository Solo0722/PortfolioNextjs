import { Button, Card } from "antd";
import Image from "next/image";
import styles from "../../styles/ProjectOne.module.css";

const ProjectOne = ({ project }) => {
  return (
    <Card
      hoverable
      style={{
        width: "350px",
        margin: "30px",
        minHeight: "370px",
        position: "relative",
      }}
      cover={<img src={project.image} style={{ height: "170px" }} />}
    >
      <Card.Meta title={project.title} description={project.description} />
      <div className={styles.buttonsContainer}>
        <Button
          type="primary"
          href={project.url}
          target="_blank"
          size={"small"}
        >
          Visit
        </Button>
        <Button type="link" size="small">View Code</Button>
      </div>
    </Card>
  );
};

export default ProjectOne;
