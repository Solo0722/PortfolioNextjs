import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Button, Tooltip, notification } from "antd";
import { FaTwitter, FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const openNotification = (placement) => {
  notification.info({
    message: `Need a website?`,
    description:
      "You can contact me through my mobile number or email on the contact page to get your website done",
    placement,
  });
};

export default function Home() {
  return (
    <div className={styles.container} id="home">
      <main className={styles.main}>
        <div className={styles.description}>
          <p style={{ color: "#000" }}>Hòla,</p>
          <h2>
            I&#39;m <span style={{ color: "#1890FF" }}>Solomon</span>{" "}
            Owusu-Ansah
          </h2>
          <h3>Full Stack Web Developer</h3>

          <div className={styles.buttons}>
            <Button type="primary" style={{ marginRight: "10px" }}>
              <a href="/SolomonResume.docx" download>
                Download Resume
              </a>
            </Button>
            {/* <Button type="ghost" onClick={() => openNotification("topRight")}>
              Need a website?
            </Button> */}
          </div>
          <div className={styles.socialLinks}>
            <Tooltip title="facebook">
              <Button
                type="ghost"
                shape="round"
                icon={<FaFacebookF size={"10px"} />}
                href={"https://www.facebook.com/profile.php?id=100078916464796"}
                target="_blank"
              />
            </Tooltip>
            <Tooltip title="twitter">
              <Button
                type="ghost"
                shape="round"
                icon={<FaTwitter size={"10px"} />}
                href={"https://www.twitter.com/@KhobbySolo"}
                target="_blank"
              />
            </Tooltip>
            <Tooltip title="linkedin">
              <Button
                type="ghost"
                shape="round"
                icon={<FaLinkedinIn size={"10px"} />}
                href={
                  "https://www.linkedin.com/in/solomon-owusu-ansah-a68668223"
                }
                target="_blank"
              />
            </Tooltip>
            <Tooltip title="github">
              <Button
                type="ghost"
                shape="round"
                icon={<FaGithub size={"10px"} />}
                href={"https://www.github.com/solo0722"}
                target="_blank"
              />
            </Tooltip>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img src="/item.png" alt="picture of me" />
        </div>
      </main>
    </div>
  );
}
