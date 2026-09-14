import React from 'react'
import profileImage from '../assets/profile.png'
import { Download, ArrowUpRight } from 'lucide-react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    link: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: 'https://linkedin.com',
  },
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    link: 'https://leetcode.com',
  },
  {
    name: 'Codeforces',
    icon: SiCodeforces,
    link: 'https://codeforces.com',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    link: 'mailto:siddarthreddys777@gmail.com',
  },
]

const Sidebar = () => {
  return (
    <aside className='w-full lg:w-[320px] p-4 lg:p-5 flex flex-col justify-between gap-4 text-white border-2 m-2 border-white rounded-[30px]'>
      <div className='flex flex-1 flex-col p-4 items-center justify-between gap-3.5 border-2 border-white/40 rounded-2xl'>
        <div className='flex flex-col items-center gap-1.5 w-full'>
          <img
            src={profileImage}
            alt='Profile_Pic'
            className='w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-2 border-zinc-700 shadow-lg'
          />

          <h1 className='text-xl font-bold mt-1'>
            Siddarth Reddy
          </h1>

          <p className='text-zinc-300 text-xs sm:text-sm'>
            I am a
            <span className='px-1.5 text-green-400 text-sm sm:text-base font-semibold'>
              Software Developer
            </span>
          </p>

          {/* Social and Coding Profile Pills stacked vertically */}
          <div className='flex flex-col gap-1.5 w-full mt-3'>
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='group flex items-center justify-between px-3 py-1.5 border border-white/20 hover:border-green-400 rounded-lg bg-zinc-950/60 hover:bg-green-400/10 transition-all text-xs text-zinc-300 hover:text-white'
                >
                  <div className='flex items-center gap-2.5'>
                    <Icon size={14} className='text-green-400 group-hover:scale-110 transition-transform' />
                    <span className='font-medium'>{social.name}</span>
                  </div>
                  <ArrowUpRight size={12} className='text-zinc-500 group-hover:text-green-400 transition-colors' />
                </a>
              )
            })}
          </div>
        </div>

        <div className='w-full p-2.5 border border-white/30 rounded-xl text-center bg-black/40 backdrop-blur-sm'>
          <p className='text-xs sm:text-sm font-medium tracking-wide'>
            Always <span className='text-green-400 font-semibold'>Learning,</span>
          </p>
          <p className='text-xs sm:text-sm font-medium tracking-wide'>
            Always <span className='text-green-400 font-semibold'>Improving</span>
          </p>
        </div>
      </div>

      <a
        href='#'
        className='px-4 py-2 rounded-xl border-2 border-white text-center flex items-center justify-center gap-2 text-sm font-medium hover:bg-green-500 hover:text-black hover:border-green-500 transition-all'
      >
        <Download size={16} />
        Download Resume
      </a>
    </aside>
  )
}

export default Sidebar