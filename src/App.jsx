import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import CvPage from './pages/CvPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Ibrahim</h1>
        <ul>
          <li><Link to="/">Hem</Link></li>
          <li><Link to="/about">Om mig</Link></li>
          <li><Link to="/projects">Projekt</Link></li>
          <li><Link to="/cv">CV</Link></li>
          <li><Link to="/contact">Kontakt</Link></li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;