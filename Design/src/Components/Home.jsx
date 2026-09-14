import React from 'react'
import Navbar from './Navbar'
import { User, CircleCheckBig, SendHorizontal } from 'lucide-react';
import homePage2 from '../assets/homePage2.png';
const Home = () => {
  return (
    <div
      id="home"
      className="
        flex flex-1 flex-col
        gap-5
        p-4 lg:p-6
        m-3
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

      <div className="flex flex-1">
        <div className="flex flex-1 flex-col">
          <p className='text-2xl pt-4 text-zinc-300'>Hi, I'm</p>
          <h1 className='text-4xl font-bold pb-2'>Crafting Digital</h1>
          <h1 className='text-green-400 text-5xl lg:text-6xl font-extrabold'>Experience</h1>
          <p className='py-4 text-base text-zinc-300 mb-4 max-w-xl'>
            Building scalable, accessible, and visually appealing solutions for the web.
          </p>

          <div id="about">
            <h1 className='tracking-widest font-bold text-green-400 text-2xl flex gap-2 items-center my-3'>
              <User size={24} /> ABOUT ME
            </h1>

            <p className='py-2 text-zinc-300 max-w-2xl leading-relaxed'>
              I'm a Computer Science and Engineering student at NIT Patna,
              passionate about building practical and scalable software solutions.
              I enjoy developing full-stack applications, solving problems,
              and exploring technologies that turn ideas into real-world products.
            </p>

            <div className='flex flex-col gap-2 py-2 text-zinc-200'>
              <p className='flex items-center gap-2'><CircleCheckBig size={16} className='text-green-400' /> Full-Stack Developer</p>
              <p className='flex items-center gap-2'><CircleCheckBig size={16} className='text-green-400' /> Data Structures & Problem Solving</p>
              <p className='flex items-center gap-2'><CircleCheckBig size={16} className='text-green-400' /> Team Player</p>
              <p className='flex items-center gap-2'><CircleCheckBig size={16} className='text-green-400' /> Constantly Learning & Exploring</p>
            </div>
          </div>

          <div className='flex flex-wrap gap-6 justify-between items-center mt-6 pt-4 border-t border-white/20'>
            <div className='flex gap-8'>
              <div className='flex flex-col items-center text-center'>
                <h1 className='text-3xl font-bold text-green-400'>2+</h1>
                <p className='text-sm text-zinc-400'>Projects</p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <h1 className='text-3xl font-bold text-green-400'>10+</h1>
                <p className='text-sm text-zinc-400'>Technologies</p>
              </div>
            </div>
            <div className='p-4 border border-white/30 rounded-2xl bg-black/40 backdrop-blur-sm'>
              <p className='text-lg lg:text-xl font-medium tracking-wide'>Always <span className='text-green-400 font-semibold'>Learning,</span></p>
              <p className='text-lg lg:text-xl font-medium tracking-wide'>Always <span className='text-green-400 font-semibold'>Improving</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home