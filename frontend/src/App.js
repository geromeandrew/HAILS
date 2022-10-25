import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import Statistics from './pages/Statistics';
import HelpCenter from './pages/HelpCenter';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Dashboard/>} />
          <Route path='/course' element={<Course/>} />
          <Route path='/statistics' element={<Statistics/>} />
          <Route path='/help_center' element={<HelpCenter/>} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
