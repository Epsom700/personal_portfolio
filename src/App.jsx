import './App.css';
import LandingSection from './LandingSection/LandingSection';
import AboutSection from './AboutSection/AboutSection';
import SkillSection from './SkillSection/SkillSection';
import ProjectSection from './ProjectSection/ProjectSection';

function App() {
  return (
    <section className="App">
      <LandingSection></LandingSection>
      <AboutSection></AboutSection>
      <ProjectSection></ProjectSection>
      <SkillSection></SkillSection>

    </section>
  );
}

export default App;
