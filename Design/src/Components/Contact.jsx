import React from 'react'
import { Mail, ArrowUpRight } from 'lucide-react'

const Contact = () => {
  return (
    <div id='contact' className='p-4 sm:p-6 m-3 border-2 border-white rounded-2xl text-white'>
      <div className='flex flex-col md:flex-row md:items-center justify-between gap-6 px-3 py-2'>
        <div>
          <h1 className='text-2xl tracking-[4px] font-bold text-green-400'>GET IN TOUCH</h1>
          <p className='text-zinc-300 text-sm mt-1 max-w-lg'>
            Have a question, opportunity, or project in mind? Feel free to drop an email!
          </p>
        </div>

        <a
          href='mailto:siddarthreddys777@gmail.com'
          className='group flex items-center gap-3 px-5 py-3 border border-white/30 rounded-xl bg-zinc-950/60 hover:border-green-400 hover:bg-green-400/10 hover:scale-105 transition-all text-sm text-zinc-200 hover:text-white shrink-0'
        >
          <div className='p-1.5 rounded-lg bg-white/5 border border-white/10 text-green-400 group-hover:bg-green-400/20 transition-colors'>
            <Mail size={18} />
          </div>
          <div className='flex flex-col text-left'>
            <span className='text-xs text-zinc-400 leading-none'>Email</span>
            <span className='font-medium text-sm sm:text-base mt-0.5 text-white'>siddarthreddys777@gmail.com</span>
          </div>
          <ArrowUpRight size={16} className='text-zinc-500 group-hover:text-green-400 transition-colors ml-2' />
        </a>
      </div>

      <div className='mt-6 pt-4 border-t border-white/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-400 px-2'>
        <p>© {new Date().getFullYear()} Siddarth Reddy. All rights reserved.</p>
        <p className='text-zinc-400'>Designed & Built with React & Tailwind CSS</p>
      </div>
    </div>
  )
}

export default Contact
