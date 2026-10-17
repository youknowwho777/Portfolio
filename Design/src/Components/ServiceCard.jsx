import { Star } from 'lucide-react';

const ServiceCard = ({ name, description, techStack, rating }) => {
  return (
    <div className="group relative flex flex-col justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5 shrink-0 w-[290px] sm:w-[330px] md:w-[350px] overflow-hidden">
      {/* Top subtle highlight accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/80 transition-all duration-500"></div>

      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-50 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors tracking-tight">
            {name}
          </h3>
          <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0 group-hover:scale-125 transition-transform"></span>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-3.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
        {/* Tech Badges with emerald accent */}
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-500/5 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Rating Stars with amber glow */}
        <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400">
          <span className="font-semibold text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Proficiency
          </span>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={14}
                className={
                  index < rating
                    ? 'text-amber-400 fill-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.4)]'
                    : 'text-zinc-300 dark:text-zinc-700'
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;