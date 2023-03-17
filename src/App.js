import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Nav from './components/Nav';

function App() {
  return (
    <div className='main'>  
      <Nav/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
    
      <Footer/>
    </div>
 
  );
}

export default App;
