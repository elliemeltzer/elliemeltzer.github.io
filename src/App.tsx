import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/home';
import Portfolio from './pages/Portfolio';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import ESGVvsVTI from "./pages/ESGV_vs._VTI";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/ESGV_vs._VTI" element={<ESGVvsVTI />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;