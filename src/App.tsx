import { FaLinkedin, FaGithub } from "react-icons/fa";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  return (
    <div className="relative font-ibm bg-neutral-900 text-neutral-50 m-0 p-0 ">
      <div className="relative z-10">
      <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

      <div className="fixed bottom-6 left-6 flex flex-col space-y-6 z-50 social-icons">
        <a
          href="https://www.linkedin.com/in/asad-mehboob-ali/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaLinkedin className="text-3xl" />
        </a>

        <a
          href="https://github.com/Asadali242"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-50 hover:text-neutral-200 dark:text-neutral-900"
        >
          <FaGithub className="text-3xl" />
        </a>
      </div>
    </div>
  );
}

export default App;
