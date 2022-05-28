import { BackTop } from "antd";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div>
      <BackTop />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
