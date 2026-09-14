import React from 'react'
import { ExternalLink } from 'lucide-react'

const ProjectCard = ({ name, description, techStack, link }) => {
  return (
    <div className='flex flex-col justify-between gap-4 border border-green-400/80 hover:border-green-400 rounded-xl text-white p-5 shrink-0 w-[300px] sm:w-[340px] bg-zinc-950/60 transition-all hover:scale-[1.01]'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-xl font-bold text-white tracking-wide'>{name}</h1>
        <p className='text-zinc-300 text-sm leading-relaxed'>{description}</p>
      </div>

      <div className='flex flex-wrap gap-2 pt-2'>
        {techStack.map((tech, index) => (
          <span key={index} className='border border-white/30 bg-white/5 rounded-md text-xs px-2.5 py-1 text-zinc-200'>
            {tech}
          </span>
        ))}
      </div>

      <div className="pt-2">
        <a
          href={link}
          title="Click To Open"
          target='_blank'
          rel='noopener noreferrer'
          className='w-full py-2 px-4 border border-white/60 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-green-400 hover:text-black hover:border-green-400 transition-all'
        >
          <span>View Project</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  )
}

export default ProjectCard