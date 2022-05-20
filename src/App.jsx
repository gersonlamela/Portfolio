import { AboutMe } from "./Components/AboutMe/AboutMe";
import { ButtonTop } from "./Components/ButtonTop/ButtonTop";
import { Experience } from "./Components/Experience/Experience";
import { Footer } from "./Components/Footer/Footer";
import { HeroMain } from "./Components/HeroMain/HeroMain";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/project";

function App() {
  return (
    <>
      <ButtonTop />
      <section id="home">
        <Navbar />
        <HeroMain />
      </section>
      <section id="aboutme">
        <AboutMe />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Footer />
    </>
  );
}

export default App;
