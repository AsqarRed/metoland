import About from "../../components/About";
import Main from "../../components/Main";
import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import { Container } from "./style";
import Footer from "../../components/Footer";

export const Home = () => {
  return (
    <Container>
      <Navbar />
      <Main />
      <About />
      <Contact />
      <Footer />
    </Container>
  );
};
export default Home;
