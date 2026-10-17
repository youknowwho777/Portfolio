import { achivementsData } from '../Data/achivementsData';
import { Trophy, TrendingUp } from 'lucide-react';

const Achivements = () => {
  return (
    <div id="achievements" className="w-full flex flex-col gap-5">
      {/* Section Header with bold highlights */}
      <div className="flex items-center gap-3 px-2">
        <div className="p-2.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shadow-sm">
          <Trophy size={22} />
        </div>
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
            <TrendingUp size={11} /> Impact &amp; Numbers
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            <span className="text-zinc-900 dark:text-white">Key Milestones &amp; </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-400">
              Achievements
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
            Measurable progress in problem solving, academics, and practical engineering
          </p>
        </div>
      </div>

      {/* Modern 4-Card Responsive Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        {achivementsData.map((item, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/5 transition-all duration-300 text-center overflow-hidden"
          >
            {/* Top highlight gradient */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/0 to-transparent group-hover:via-emerald-500/80 transition-all duration-500"></div>

            <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400 tracking-tight group-hover:scale-105 transition-transform duration-300">
              {item.achivement}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-zinc-700 dark:text-zinc-300 mt-2">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achivements;