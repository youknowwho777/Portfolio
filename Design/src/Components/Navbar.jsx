import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex flex-wrap gap-6 sm:gap-10 tracking-wider text-lg sm:text-xl justify-end items-center'>
      <a href='#home' className='hover:text-green-400 transition-colors'>Home</a>
      <a href='#about' className='hover:text-green-400 transition-colors'>About</a>
      <a href='#projects' className='hover:text-green-400 transition-colors'>Projects</a>
      <a href='#skills' className='hover:text-green-400 transition-colors'>Skills</a>
      <a href='#achievements' className='hover:text-green-400 transition-colors'>Achievements</a>
    </nav>
  )
}

export default Navbar