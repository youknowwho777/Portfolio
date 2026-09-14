import React from 'react'
import { Star } from 'lucide-react'

const ServiceCard = ({ name, description, techStack, rating }) => {
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

      <div className="flex items-center gap-1.5 pt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={16}
            className={index < rating ? 'text-green-400 fill-green-400' : 'text-zinc-600'}
          />
        ))}
      </div>
    </div>
  )
}

export default ServiceCard