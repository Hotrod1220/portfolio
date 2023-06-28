import Landing from './components/sections/Landing'
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/common/footer';
import Navigation from './components/common/navigation';

function App() {
  return (
    <div className="App">
      <Landing/>
      <Navigation/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
