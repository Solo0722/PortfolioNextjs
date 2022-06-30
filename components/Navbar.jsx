import styles from "../styles/NavbarStyles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { Button, Drawer, List, Tooltip } from "antd";
import { FaTwitter, FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";

const Navbar = () => {
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  // console.log(router.pathname);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <nav
      className={styles.navContainer}
      style={{
        backdropFilter: `${navbar ? "blur(10px)" : "blur(0px)"}`,
      }}
    >
      <div className={styles.imgContainer}>
        <img src="/memories-Logo.png" alt="logo" width={40} height={40} />
      </div>
      <div className={styles.menuButton}>
        <Button icon={<MenuOutlined />} onClick={showDrawer} type="text" />
      </div>
      <ul className={styles.navigationContainer}>
        <li>
          <a href={"#home"}>Home</a>
        </li>
        <li>
          <a href={"#about"}>About</a>
        </li>
        <li>
          <a href={"#projects"}>Projects</a>
        </li>
        <li>
          <a href={"#contact"}>Contact</a>
        </li>
        <li>
          <a href={"https://streamline-khaki.vercel.app"} target="_blank">
            Blog
          </a>
        </li>
      </ul>
      <Drawer
        placement="right"
        onClose={onClose}
        closeIcon={<CloseCircleOutlined />}
        visible={visible}
        width={"80%"}
        headerStyle={{ background: "#a2d9ff" }}
        drawerStyle={{ background: "#a2d9ff" }}
      >
        <List className={styles.list}>
          <List.Item className={styles.listItem}>
            <Button type="text" href="#home" onClick={onClose}>
              Home
            </Button>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Button type="text" href="#about" onClick={onClose}>
              About
            </Button>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Button type="text" href="#projects" onClick={onClose}>
              Projects
            </Button>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Button type="text" href="#contact" onClick={onClose}>
              Contact
            </Button>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Button
              type="text"
              href="http://streamline-khaki.vercel.app"
              target="_blank"
              onClick={onClose}
            >
              Blog
            </Button>
          </List.Item>
        </List>
        <div className={styles.socialLinks}>
          <Tooltip title="facebook">
            <Button
              type="ghost"
              shape="round"
              style={{ marginLeft: "10px" }}
              icon={<FaFacebookF size={"10px"} />}
              href={"https://www.facebook.com/profile.php?id=100078916464796"}
              target="_blank"
            />
          </Tooltip>
          <Tooltip title="twitter">
            <Button
              type="ghost"
              shape="round"
              style={{ marginLeft: "10px" }}
              icon={<FaTwitter size={"10px"} />}
              href={"https://www.twitter.com/@KhobbySolo"}
              target="_blank"
            />
          </Tooltip>
          <Tooltip title="linkedin">
            <Button
              type="ghost"
              shape="round"
              style={{ marginLeft: "10px" }}
              icon={<FaLinkedinIn size={"10px"} />}
              href={"https://www.linkedin.com/in/solomon-owusu-ansah-a68668223"}
              target="_blank"
            />
          </Tooltip>
          <Tooltip title="github">
            <Button
              type="ghost"
              shape="round"
              style={{ marginLeft: "10px" }}
              icon={<FaGithub size={"10px"} />}
              href={"https://www.github.com/solo0722"}
              target="_blank"
            />
          </Tooltip>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
