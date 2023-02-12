import Topbar from './components/Topbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import './app.scss';

export default function App() {
  return (
      <div>
          <div className="app">
            <Topbar />
            <div className="parts">
              <Home />
              <About />
              <Projects />
              <Contact />
            </div>
          </div>
      </div>
  );
}