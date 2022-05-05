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
        <Button icon={<MenuOutlined />} onClick={showDrawer}></Button>
      </div>
      <ul className={styles.navigationContainer}>
        <Link href={"/"}>
          <li className={router.pathname == "/" ? styles.active : undefined}>
            Home
          </li>
        </Link>
        <Link href={"/about"}>
          <li
            className={router.pathname == "/about" ? styles.active : undefined}
          >
            About
          </li>
        </Link>
        <Link href={"/projects"}>
          <li
            className={
              router.pathname == "/projects" ? styles.active : undefined
            }
          >
            Projects
          </li>
        </Link>
        <Link href={"/contact"}>
          <li
            className={
              router.pathname == "/contact" ? styles.active : undefined
            }
          >
            Contact
          </li>
        </Link>
        {/* <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip> */}
      </ul>
      <Drawer
        title=""
        placement="right"
        onClose={onClose}
        visible={visible}
        width={"80%"}
      >
        <List className={styles.list}>
          <List.Item className={styles.listItem}>
            <Button
              className={router.pathname == "/" ? styles.active : undefined}
              type="text"
              href="/"
              onClick={onClose}
            >
              Home
            </Button>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Button
              className={
                router.pathname == "/about" ? styles.active : undefined
              }
              type="text"
              href="/about"
              onClick={onClose}
            >
              About
            </Button>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Button
              className={
                router.pathname == "/projects" ? styles.active : undefined
              }
              type="text"
              href="/projects"
              onClick={onClose}
            >
              Projects
            </Button>
          </List.Item>
          <List.Item className={styles.listItem}>
            <Button
              className={
                router.pathname == "/contact" ? styles.active : undefined
              }
              type="text"
              href="/contact"
              onClick={onClose}
            >
              Contact
            </Button>
          </List.Item>
        </List>
      </Drawer>
    </nav>
  );
};

export default Navbar;
