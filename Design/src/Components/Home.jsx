import React from 'react'
import Navbar from './Navbar'
import { User, CircleCheckBig } from 'lucide-react'
import homePage2 from '../assets/homePage2.png'

const Home = () => {
  return (
    <div
      id="home"
      className="
        flex flex-1 flex-col justify-between
        gap-4
        p-4 lg:p-5
        m-2
        border-2 border-white
        rounded-[30px]
        text-white
        bg-black
        bg-no-repeat
        bg-right
        bg-contain
      "
      style={{ backgroundImage: `url(${homePage2})` }}
    >
      <Navbar />

      <div className="flex flex-1 items-center">
        <div className="flex flex-1 flex-col justify-center py-2">
          <p className='text-lg lg:text-xl text-zinc-300'>Hi, I'm</p>
          <h1 className='text-3xl lg:text-4xl font-bold pb-1'>Crafting Digital</h1>
          <h1 className='text-green-400 text-4xl lg:text-5xl font-extrabold pb-2'>Experience</h1>
          <p className='text-sm lg:text-base text-zinc-300 mb-4 max-w-xl'>
            Building scalable, accessible, and visually appealing solutions for the web.
          </p>

          <div id="about" className="pt-2 border-t border-white/20">
            <h1 className='tracking-widest font-bold text-green-400 text-xl flex gap-2 items-center my-2'>
              <User size={20} /> ABOUT ME
            </h1>

            <p className='text-xs lg:text-sm text-zinc-300 max-w-2xl leading-relaxed'>
              I'm a Computer Science and Engineering student at NIT Patna,
              passionate about building practical and scalable software solutions.
              I enjoy developing full-stack applications, solving problems,
              and exploring technologies that turn ideas into real-world products.
            </p>

            <div className='flex flex-col gap-1.5 pt-3 text-xs lg:text-sm text-zinc-200'>
              <p className='flex items-center gap-2'><CircleCheckBig size={15} className='text-green-400 shrink-0' /> Full-Stack Developer</p>
              <p className='flex items-center gap-2'><CircleCheckBig size={15} className='text-green-400 shrink-0' /> Data Structures & Problem Solving</p>
              <p className='flex items-center gap-2'><CircleCheckBig size={15} className='text-green-400 shrink-0' /> Team Player</p>
              <p className='flex items-center gap-2'><CircleCheckBig size={15} className='text-green-400 shrink-0' /> Constantly Learning & Exploring</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home