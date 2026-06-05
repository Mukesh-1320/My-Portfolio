
import { Navbar } from "./layout/Navbar"
import { About } from "./sections/About"
import { Projects } from "./sections/Projects"
import { Contact } from "./sections/Contact"
import { Experience } from "./sections/Experience"
import { Education } from "./sections/Education"
import { Hero } from "./sections/Hero"
import { Footer } from "./layout/Footer"

function App() {
 

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Experience/>
        <Education/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
