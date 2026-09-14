import React from 'react'
import { skillsData } from '../Data/skillsData'
import ServiceCard from './ServiceCard'

const Skills = () => {
  return (
    <div id='skills' className='max-w-full m-3 border-2 border-white rounded-2xl'>
      <h1 className='py-4 px-9 text-2xl tracking-[4px] font-bold text-green-400 flex justify-start'>MY EXPERTISE</h1>

      <div className='m-5 p-5 flex gap-6 overflow-x-auto border-white/40 border-2 rounded-2xl'>

        {skillsData.map((skill) => (
          <ServiceCard
            key={skill.name}
            name={skill.name}
            description={skill.description}
            techStack={skill.techStack}
            rating={skill.rating}
          />
        ))}
      </div>

    </div>
  )
}

export default Skills