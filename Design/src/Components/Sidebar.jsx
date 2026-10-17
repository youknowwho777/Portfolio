import profileImage from '../assets/profile.png';
import { Download, ArrowUpRight, Sparkles, MapPin, Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces } from 'react-icons/si';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    link: 'https://github.com/youknowwho777',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://linkedin.com',
  },
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    link: 'https://leetcode.com/u/youknowwho777/',
  },
  {
    name: 'Codeforces',
    icon: SiCodeforces,
    link: 'https://codeforces.com/profile/youknowwho_777',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    link: 'mailto:siddarthreddys777@gmail.com',
  },
];

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-[340px] shrink-0 flex flex-col justify-between gap-6 p-6 sm:p-7 rounded-3xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl shadow-zinc-900/5 dark:shadow-black/40 transition-all">
      {/* Top Profile Section */}
      <div className="flex flex-col items-center text-center">
        {/* Profile Image - prominent size with gradient glow */}
        <div className="relative group mb-5">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-400 opacity-60 blur-md group-hover:opacity-100 transition-opacity"></div>
          <img
            src={profileImage}
            alt="Siddarth Reddy"
            className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-white dark:border-zinc-800 shadow-xl"
          />
          <span className="absolute bottom-2 right-3 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-900 shadow-sm" title="Available for opportunities"></span>
        </div>

        <h1 className="text-2xl sm:text-[26px] font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
          Siddarth Reddy
        </h1>

        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 mt-2.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
          <Code2 size={13} />
          Software Developer
        </div>

        <p className="flex items-center justify-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 mt-2.5">
          <MapPin size={13} className="text-zinc-400 dark:text-zinc-500" />
          NIT Patna, India
        </p>

        {/* Social / Profiles 2-Column Responsive Grid */}
        <div className="grid grid-cols-2 gap-2 w-full mt-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between px-3 py-2 rounded-xl bg-zinc-100/70 dark:bg-zinc-800/50 hover:bg-emerald-500/10 dark:hover:bg-emerald-500/15 border border-zinc-200/60 dark:border-zinc-700/40 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                <div className="flex items-center gap-2">
                  <Icon size={14} className="text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" />
                  <span className="truncate">{social.name}</span>
                </div>
                <ArrowUpRight size={12} className="text-zinc-400 dark:text-zinc-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors shrink-0" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Philosophy Card & Resume CTA */}
      <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/80">
        <div className="p-3.5 rounded-2xl bg-zinc-100/60 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-700/40 text-center">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
            <Sparkles size={12} className="text-emerald-500" /> Core Mindset
          </p>
          <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 mt-1">
            Always <span className="text-emerald-500 font-semibold">Learning,</span>
            <br />
            Always <span className="text-emerald-500 font-semibold">Improving</span>
          </p>
        </div>

        <a
          href="#"
          className="w-full py-3 px-4 rounded-2xl bg-zinc-900 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-emerald-500/20 active:scale-[0.98]"
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;