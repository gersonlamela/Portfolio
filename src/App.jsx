import React from "react";

import { AboutMe } from "./Components/AboutMe/AboutMe";
import { ButtonTop } from "./Components/ButtonTop/ButtonTop";
import { Experience } from "./Components/Experience/Experience";
import { Footer } from "./Components/Footer/Footer";
import { HeroMain } from "./Components/HeroMain/HeroMain";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/project";
import ScrollRevealSection from "./Components/RevealSections/revealSections";

function App() {
  return (
    <>
      <ButtonTop />
 
        <section id="home">
          <Navbar />
          <HeroMain />
        </section>
 

      <ScrollRevealSection>
        <section id="aboutme">
          <AboutMe />
        </section>
      </ScrollRevealSection>

      <ScrollRevealSection>
        <section id="experience">
          <Experience />
        </section>
      </ScrollRevealSection>

      <ScrollRevealSection>
        <section id="projects">
          <Projects />
        </section>
      </ScrollRevealSection>

      <Footer />
    </>
  );
}

export default App;
