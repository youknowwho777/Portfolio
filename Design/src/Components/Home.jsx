import Navbar from './Navbar';
import { CheckCircle2, ArrowRight, Terminal } from 'lucide-react';

const Home = () => {
  return (
    <div
      id="home"
      className="relative flex flex-1 flex-col justify-between p-5 sm:p-7 lg:p-8 rounded-3xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl shadow-zinc-900/5 dark:shadow-black/40 overflow-hidden"
    >
      {/* Decorative gradient glow effect */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent blur-3xl pointer-events-none"></div>

      <div className="relative z-10 flex flex-col justify-between h-full gap-6">
        <Navbar />

        {/* Hero Banner Section */}
        <div className="flex flex-col justify-center py-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 rounded-full bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700/60 w-fit text-xs font-medium text-zinc-700 dark:text-zinc-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            Computer Science @ NIT Patna
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
            Crafting Scalable &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
              Digital Experiences
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
            Building accessible, high-performance, and visually intuitive web applications with modern full-stack architectures.
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm transition-all shadow-md shadow-emerald-500/20 active:scale-95"
            >
              Explore Projects
              <ArrowRight size={15} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-300/60 dark:border-zinc-700 font-medium text-sm transition-all active:scale-95"
            >
              Get in Touch
            </a>
          </div>

          {/* About Me Section integrated seamlessly */}
          <div id="about" className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-zinc-800/80">
            <h2 className="text-xs uppercase tracking-widest font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 mb-2.5">
              <Terminal size={14} /> About Me
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              I am a Computer Science and Engineering student at NIT Patna passionate about turning ideas into scalable, real-world software. I love full-stack development, solving challenging algorithmic problems, and exploring robust technologies.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4">
              {[
                'Full-Stack Web Development',
                'DSA & Algorithmic Problem Solving',
                'Fast Learner & Collaborative Teammate',
                'Clean Code & Responsive UI Design',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;