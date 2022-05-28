import footerStyles from "../styles/Footer.module.css";
import { Button } from "antd";
import { FaTwitter, FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={footerStyles.container}>
      <div>
        <p>CopyRight By Solomon Owusu-Ansah &copy; 2022</p>
      </div>
      <div>
        <div className={footerStyles.socialLinks}>
          <Button
            type="ghost"
            shape="circle"
            icon={<FaFacebookF size={"10px"} />}
            href={"https://www.facebook.com/profile.php?id=100078916464796"}
            target="_blank"
          />
          <Button
            type="ghost"
            shape="circle"
            icon={<FaTwitter size={"10px"} />}
            href={"https://www.twitter.com/@KhobbySolo"}
            target="_blank"
          />
          <Button
            type="ghost"
            shape="circle"
            icon={<FaLinkedinIn size={"10px"} />}
            href={"https://www.linkedin.com/in/solomon-owusu-ansah-a68668223"}
            target="_blank"
          />
          <Button
            type="ghost"
            shape="circle"
            icon={<FaGithub size={"10px"} />}
            href={"https://www.github.com/solo0722"}
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
