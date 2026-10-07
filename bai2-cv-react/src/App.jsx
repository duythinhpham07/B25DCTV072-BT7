import Header from "./components/Header";
import Section from "./components/Section";
import SkillList from "./components/SkillList";
import ProjectList from "./components/ProjectList";
import EducationList from "./components/EducationList";
import Footer from "./components/Footer";
import { profile, education, skills, projects } from "./data/cv";
import "./App.css";

function App() {
  return (
    <div className="cv">
      <Header profile={profile} />
      <main>
        <Section title="Giới thiệu">
          <p>{profile.about}</p>
        </Section>
        <Section title="Học vấn">
          <EducationList items={education} />
        </Section>
        <Section title="Kỹ năng">
          <SkillList skills={skills} />
        </Section>
        <Section title="Dự án">
          <ProjectList projects={projects} />
        </Section>
      </main>
      <Footer name={profile.name} />
    </div>
  );
}

export default App;
