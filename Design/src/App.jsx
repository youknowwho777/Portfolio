import { ThemeProvider } from './context/ThemeContext';
import Sidebar from './Components/Sidebar';
import Skills from './Components/Skills';
import Home from './Components/Home';
import Achivements from './Components/Achivements';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-zinc-50 dark:bg-[#0c0d0e] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 selection:bg-emerald-500 selection:text-white">
        {/* Ambient background light gradients */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
          <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl"></div>
          <div className="absolute top-1/2 -right-40 w-96 h-96 rounded-full bg-teal-500/10 dark:bg-teal-500/5 blur-3xl"></div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col gap-10">
          {/* Hero Row: Responsive Bento layout with natural, comfortable height */}
          <section className="flex flex-col lg:flex-row items-stretch gap-6">
            <Sidebar />
            <Home />
          </section>

          {/* Projects Carousel */}
          <Projects />

          {/* Skills Carousel */}
          <Skills />

          {/* Milestones Bento Grid */}
          <Achivements />

          {/* Contact & Footer */}
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;