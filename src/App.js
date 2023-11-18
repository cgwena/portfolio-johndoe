import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import Realisations from './views/Realisations';
import Blog from './views/Blog';
import Legal from './views/Legal';
import Services from './views/Services';
import Contact from './views/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Realisations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
    </div>
  );
}

export default App;
