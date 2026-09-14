import React from 'react'
import profileImage from '../assets/profile.png'
import { Download } from 'lucide-react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'

const socialLinks = [
  {
    name: 'Email',
    icon: FaEnvelope,
    link: '#',
  },
  {
    name: 'GitHub',
    icon: FaGithub,
    link: '#',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    link: '#',
  },
  {
    name: 'LeetCode',
    icon: SiLeetcode,
    link: '#',
  },
  {
    name: 'Codeforces',
    icon: SiCodeforces,
    link: '#',
  },
]

const Sidebar = () => {
  return (
    <aside className='w-full lg:w-[320px] p-4 lg:p-6 flex flex-col gap-5 text-white border-2 m-3 border-white rounded-[30px]'>

      <div className='flex flex-1 flex-col p-4 items-center justify-center gap-3 border-2 border-white/40 rounded-2xl'>

        <img
          src={profileImage}
          alt='Profile_Pic'
          className='w-32 h-32 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full object-cover border-2 border-zinc-700 shadow-lg'
        />

        <h1 className='text-2xl font-bold'>
          Siddarth Reddy
        </h1>

        <p className='text-zinc-300'>
          I am a
          <span className='p-2 text-green-400 text-xl font-semibold'>
            Software Developer
          </span>
        </p>

        <div className='flex gap-4 mt-3'>
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <a
                key={social.name}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                title={social.name}
                className='text-zinc-300 hover:text-green-400 hover:scale-110 transition-all'
              >
                <Icon size={22} />
              </a>
            )
          })}

        </div>

      </div>

      <a
        href='#'
        className='px-4 py-2.5 rounded-xl border-2 border-white text-center flex items-center justify-center gap-3 font-medium hover:bg-green-500 hover:text-black hover:border-green-500 transition-all'
      >
        <Download size={20} />
        Download Resume
      </a>

    </aside>
  )
}

export default Sidebar