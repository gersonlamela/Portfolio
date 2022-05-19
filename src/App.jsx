import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Experience } from "./Components/Experience/Experience";
import { HeroMain } from "./Components/HeroMain/HeroMain";
import { Navbar } from "./Components/Navbar/Navbar";

import { RepositoryList } from "./Components/repo/RepositoryList";

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
      <section id="projects">
        <RepositoryList />
      </section>
    </>
  );
}

export default App;
