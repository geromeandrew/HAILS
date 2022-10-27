import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import Settings from './pages/Settings';
import HelpCenter from './pages/HelpCenter';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Dashboard/>} />
          <Route path='/course' element={<Course/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/help_center' element={<HelpCenter/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
