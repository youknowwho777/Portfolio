import { projectsData } from '../Data/projectsData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='projects' className='max-w-full m-3 border-2 border-white rounded-2xl'>
      <h1 className='py-4 px-9 text-2xl tracking-[4px] font-bold text-green-400 flex justify-start'>MY PROJECTS</h1>

      <div className='m-5 p-5 flex gap-6 overflow-x-auto border-white/40 border-2 rounded-2xl'>

        {projectsData.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
          />
        ))}
      </div>

    </div>
  )
}

export default Projects