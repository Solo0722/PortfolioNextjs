import styles from "../styles/NavbarStyles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { FiMenu } from "react-icons/fi";
import { Button, Drawer, List } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  // console.log(router.pathname);

  return (
    <nav className={styles.navContainer}>
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
      </ul>
      <Drawer
        placement="right"
        onClose={onClose}
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
        </List>
      </Drawer>
    </nav>
  );
};

export default Navbar;
