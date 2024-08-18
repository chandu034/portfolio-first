import './App.css';
import Profile from './PortFolioContainer/Home/Profile';
import Navbar from './PortFolioContainer/NavBar/Navbar';
import About from './PortFolioContainer/AboutMe/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './PortFolioContainer/ContactMe/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
