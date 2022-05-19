import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Experience } from "./Components/Experience/Experience";
import { HeroMain } from "./Components/HeroMain/HeroMain";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";
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
        {/* <Projects /> */}
        <div className="w-full h-auto flex flex-col items-center justify-center bg-graylight dark:bg-dark200 ">
          <RepositoryList />
        </div>
      </section>
    </>
  );
}

export default App;
