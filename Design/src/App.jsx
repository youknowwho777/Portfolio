import Sidebar from './Components/Sidebar'
import Skills from './Components/Skills'
import Home from './Components/Home'
import Achivements from './Components/Achivements'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div className='bg-black min-h-screen text-white flex flex-col max-w-7xl mx-auto'>
      {/* Landing View: Fills 100vh on laptop/desktop */}
      <div className="flex flex-col lg:flex-row items-stretch lg:h-screen p-2 sm:p-4 box-border">
        <Sidebar />
        <Home />
      </div>

      {/* Sections revealed on scroll */}
      <div className="flex flex-col gap-8 p-2 sm:p-4 pb-12">
        <Projects />
        <Skills />
        <Achivements />
        <Contact />
      </div>
    </div>
  )
}

export default App