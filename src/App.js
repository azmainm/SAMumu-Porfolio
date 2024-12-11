import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Publications from './pages/Publications';
import Projects from './pages/Projects';
import Achievements from './pages/Achievements';
import Hobbies from './pages/Hobbies';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <main className="ml-64 p-8 w-full">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
