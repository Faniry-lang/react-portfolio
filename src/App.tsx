import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutMe } from "./components/AboutMe";
import { Projects } from "./components/Projects";
import { Contacts } from "./components/Contacts";

function App() {
  return (
    <div className="bg-slate-50 text-slate-950">
      <Navbar />
      <main className="w-full flex flex-col gap-40 overflow-x-clip">
        <Hero />
        <AboutMe />
        <Projects />
        <Contacts />
      </main>
    </div>
  )
}

export default App;