import { useState } from 'react';
import { useTheme } from '../context/useTheme';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full flex items-center justify-between py-2 sm:py-3 transition-colors duration-300">
      {/* Brand logo / tag */}
      <a href="#home" className="flex items-center gap-2 group">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-sm font-semibold tracking-wider text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
          SIDDARTH<span className="text-emerald-500">.DEV</span>
        </span>
      </a>

      {/* Desktop Links & Theme Switcher */}
      <div className="hidden md:flex items-center gap-6">
        <div className="flex items-center gap-5 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-emerald-500 hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-xl bg-zinc-200/70 hover:bg-zinc-200 dark:bg-zinc-800/80 dark:hover:bg-zinc-700/80 text-zinc-800 dark:text-zinc-200 border border-zinc-300/50 dark:border-zinc-700/60 transition-all hover:scale-105 active:scale-95 shadow-sm"
        >
          {theme === 'dark' ? (
            <Sun size={17} className="text-amber-400" />
          ) : (
            <Moon size={17} className="text-zinc-700" />
          )}
        </button>
      </div>

      {/* Mobile Actions: Theme toggle + Hamburger */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-xl bg-zinc-200/70 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-300/50 dark:border-zinc-700/60"
        >
          {theme === 'dark' ? (
            <Sun size={16} className="text-amber-400" />
          ) : (
            <Moon size={16} className="text-zinc-700" />
          )}
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="p-2 rounded-xl bg-zinc-200/70 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 border border-zinc-300/50 dark:border-zinc-700/60"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 z-50 p-4 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-emerald-500/10 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;