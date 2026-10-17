import { skillsData } from '../Data/skillsData';
import ServiceCard from './ServiceCard';
import { Cpu, Zap } from 'lucide-react';

const Skills = () => {
  return (
    <div id="skills" className="w-full flex flex-col gap-5">
      {/* Section Header with bold highlights */}
      <div className="flex items-end justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shadow-sm">
            <Cpu size={22} />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              <Zap size={11} /> Technical Stack
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-zinc-900 dark:text-white">Skills &amp; </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400">
                Expertise
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              Technical stack across frontend, backend, and database architecture
            </p>
          </div>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          Scroll to explore &rarr;
        </span>
      </div>

      {/* Floating horizontal carousel track */}
      <div className="flex gap-4 sm:gap-5 overflow-x-auto py-2 px-1 scroll-smooth">
        {skillsData.map((skill) => (
          <ServiceCard
            key={skill.name}
            name={skill.name}
            description={skill.description}
            techStack={skill.techStack}
            rating={skill.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;