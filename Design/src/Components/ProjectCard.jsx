import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ name, description, techStack, link }) => {
  const isAvailable = link && link !== '#';

  return (
    <div className="flex flex-col justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/5 shrink-0 w-[290px] sm:w-[330px] md:w-[350px]">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
            {name}
          </h3>
          <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-3.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <a
          href={link}
          title={isAvailable ? 'View project details' : 'In development'}
          target={isAvailable ? '_blank' : '_self'}
          rel="noopener noreferrer"
          className={`w-full py-2 px-3.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
            isAvailable
              ? 'bg-zinc-900 hover:bg-emerald-600 dark:bg-zinc-800 dark:hover:bg-emerald-500 text-white dark:hover:text-zinc-950 shadow-sm'
              : 'bg-zinc-100 dark:bg-zinc-800/40 text-zinc-400 dark:text-zinc-500 cursor-not-allowed border border-dashed border-zinc-300 dark:border-zinc-700'
          }`}
        >
          {isAvailable ? (
            <>
              <span>View Repository</span>
              <ExternalLink size={13} />
            </>
          ) : (
            <span>In Development</span>
          )}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;