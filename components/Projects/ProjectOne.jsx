import { GithubFilled } from "@ant-design/icons";
import { Button, Card } from "antd";
import { BsFillArrowUpRightCircleFill, BsArrowUpRight } from "react-icons/bs";

import styles from "../../styles/ProjectOne.module.css";

const ProjectOne = ({ project }) => {
  return (
    <Card
      hoverable
      style={{
        width: "350px",
        margin: "10px",
        minHeight: "350px",
        position: "relative",
      }}
      cover={<img src={project.image} style={{ height: "170px" }} />}
    >
      <Card.Meta title={project.title} description={project.description} />
      <div className={styles.buttonsContainer}>
        <Button type="link" href={project.url} target="_blank">
          Visit site
        </Button>
        <Button type="text" size="large" icon={<GithubFilled />}></Button>
      </div>
    </Card>
  );
};

export default ProjectOne;
