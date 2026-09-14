import Sidebar from './Components/Sidebar'
import Skills from './Components/Skills'
import Home from './Components/Home'
import Achivements from './Components/Achivements'
import Projects from './Components/Projects'

const App = () => {
  return (
    <div className='bg-black min-h-screen text-white flex flex-col gap-6 py-6 px-2 sm:px-4 max-w-7xl mx-auto'>
      <div className="flex flex-col lg:flex-row items-stretch">
        <Sidebar />
        <Home />
      </div>
      <Projects />
      <Skills />
      <Achivements />
    </div>
  )
}

export default App