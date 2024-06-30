import NavBar from "../Components/NavBar.jsx";
import Hero from "../Components/Hero.jsx";
import Skills from "../Components/Skills.jsx";
import { SKILLS_CORE } from "../data.js";
import About from "../Components/About.jsx";
import Headline from "../components/Headline.jsx";
import Experience from "../Components/Experience.jsx";
import Project from "../Components/Project.jsx";
import Contact from "../Components/Contact.jsx";
import Footer from "../Components/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <div>
        <Headline title="My skills" />
        <div className="skills-container" id="d--none">
          <Skills img={SKILLS_CORE[0].image} title={SKILLS_CORE[0].title} />
          <Skills img={SKILLS_CORE[1].image} title={SKILLS_CORE[1].title} />
          <Skills img={SKILLS_CORE[2].image} title={SKILLS_CORE[2].title} />
          <Skills img={SKILLS_CORE[3].image} title={SKILLS_CORE[3].title} />
          <Skills img={SKILLS_CORE[4].image} title={SKILLS_CORE[4].title} />
        </div>
        <div className="skills-container" id="di-none">
          <Skills img={SKILLS_CORE[0].image} title={SKILLS_CORE[0].title} />
          <Skills img={SKILLS_CORE[1].image} title={SKILLS_CORE[1].title} />
          <Skills img={SKILLS_CORE[2].image} title={SKILLS_CORE[2].title} />
        </div>
        <div className="skills-container" id="di-none">
          <Skills img={SKILLS_CORE[3].image} title={SKILLS_CORE[3].title} />
          <Skills img={SKILLS_CORE[4].image} title={SKILLS_CORE[4].title} />
          <Skills img={SKILLS_CORE[5].image} title={SKILLS_CORE[5].title} />
        </div>
        <div className="skills-container" id="di-none">
          <Skills img={SKILLS_CORE[6].image} title={SKILLS_CORE[6].title} />
          <Skills img={SKILLS_CORE[7].image} title={SKILLS_CORE[7].title} />
          <Skills img={SKILLS_CORE[8].image} title={SKILLS_CORE[8].title} />
        </div>
        <div className="skills-container" id="d--none">
          <Skills img={SKILLS_CORE[5].image} title={SKILLS_CORE[5].title} />
          <Skills img={SKILLS_CORE[6].image} title={SKILLS_CORE[6].title} />
          <Skills img={SKILLS_CORE[7].image} title={SKILLS_CORE[7].title} />
          <Skills img={SKILLS_CORE[8].image} title={SKILLS_CORE[8].title} />
        </div>
        <div className="skills-container">
          <Skills img={SKILLS_CORE[9].image} title={SKILLS_CORE[9].title} />
          <Skills img={SKILLS_CORE[10].image} title={SKILLS_CORE[10].title} />
          <Skills img={SKILLS_CORE[11].image} title={SKILLS_CORE[11].title} />
        </div>
      </div>
      <Headline title="Experience" />
      <Experience />
      <Headline title="Projects" />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
