import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Experience } from "./Components/Experience/Experience";
import { HeroMain } from "./Components/HeroMain/HeroMain";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
