import styles from "../styles/NavbarStyles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Navbar = () => {
  const router = useRouter();

  // console.log(router.pathname);

  return (
    <nav className={styles.navContainer}>
      <div className={styles.imgContainer}>
        <img src="/memories-Logo.png" alt="logo" width={40} height={40} />
      </div>
      <ul className={styles.navigationContainer}>
        <Link href={"/"}>
          <li className={router.pathname == "/" && styles.active}>Home</li>
        </Link>
        <Link href={"/about"}>
          <li className={router.pathname == "/about" && styles.active}>
            About
          </li>
        </Link>
        <Link href={"/projects"}>
          <li className={router.pathname == "/projects" && styles.active}>
            Projects
          </li>
        </Link>
        <Link href={"/contact"}>
          <li className={router.pathname == "/contact" && styles.active}>
            Contact
          </li>
        </Link>
        {/* <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip> */}
      </ul>
    </nav>
  );
};

export default Navbar;
