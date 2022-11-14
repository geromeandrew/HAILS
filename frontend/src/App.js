import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import Settings from './pages/Settings';
import HelpCenter from './pages/HelpCenter';
import DetectionSection from './pages/lettergame/DetectionSection';
import InstructionSection from './pages/lettergame/InstructionSection';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Dashboard/>} />
          <Route path='/course' element={<Course/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/help_center' element={<HelpCenter/>} />
          <Route path='/letter-game' element={<DetectionSection />} />
          <Route path='/instruction_section' element={<InstructionSection />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
