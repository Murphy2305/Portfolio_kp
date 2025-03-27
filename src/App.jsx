import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Project from "./sections/Project"
import Footer from "./sections/Footer"
import ContactMe from "./sections/ContactMe"
import WorkExperience from "./sections/Experience"
function App() {

  return (
 <main className="max-w-7xl mx-auto relative">   
    <Navbar/>
    <Hero/>
    <About/>
    <Project/>
    <WorkExperience/>
    <ContactMe/>
        <Footer/>

  </main>
  )
}

export default App
