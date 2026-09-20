import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Workflow } from './components/Workflow';
import { Projects } from './components/Projects';
import { PowerBI } from './components/PowerBI';
import { GitHubActivity } from './components/GitHubActivity';
import { Achievements, Learning } from './components/Achievements';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Workflow />
        <Projects />
        <PowerBI />
        <GitHubActivity />
        <Achievements />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
