import { Mail, ArrowUpRight, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="w-full mt-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white/80 via-white/60 to-emerald-500/5 dark:from-zinc-900/80 dark:via-zinc-900/60 dark:to-emerald-500/10 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl shadow-zinc-900/5 dark:shadow-black/40">
        <div className="flex flex-col gap-1.5 text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <MessageSquare size={14} /> Get in Touch
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Let's build something impactful together.
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md">
            Whether you have an interesting project, job opportunity, or just want to chat about tech — my inbox is always open!
          </p>
        </div>

        <a
          href="mailto:siddarthreddys777@gmail.com"
          className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-zinc-900 hover:bg-emerald-600 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-zinc-950 font-semibold text-sm transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95 shrink-0"
        >
          <Mail size={17} />
          <span>siddarthreddys777@gmail.com</span>
          <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-6 px-3 text-xs text-zinc-500 dark:text-zinc-400">
        <p>&copy; {new Date().getFullYear()} Siddarth Reddy. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Crafted with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Contact;
