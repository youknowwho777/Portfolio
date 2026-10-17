import { projectsData } from '../Data/projectsData';
import ProjectCard from './ProjectCard';
import { FolderGit2, Sparkles } from 'lucide-react';

const Projects = () => {
  return (
    <div id="projects" className="w-full flex flex-col gap-5">
      {/* Section Header with bold highlights */}
      <div className="flex items-end justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shadow-sm">
            <FolderGit2 size={22} />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
              <Sparkles size={11} /> Portfolio Showcase
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-zinc-900 dark:text-white">Featured </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400">
                Projects
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              Applications, systems, and experiments built with modern tools
            </p>
          </div>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          Scroll to explore &rarr;
        </span>
      </div>

      {/* Modern horizontal carousel track */}
      <div className="flex gap-4 sm:gap-5 overflow-x-auto py-2 px-1 scroll-smooth">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;