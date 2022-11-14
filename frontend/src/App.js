//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';

import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import Settings from './pages/Settings';
import HelpCenter from './pages/HelpCenter';
import LoginForm from './pages/LoginForm';
import DetectionSection from './pages/lettergame/DetectionSection';

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin123'
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
    if (details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      }); 
    }
    else {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () => {
    console.log("details do not match!");
    setUser ({ name: "", email: ""})
  }

  return (
    <div>
      <div>
        {(user.email !== "") ?(
          <div className='welcome'>
            <Router>
              <Routes>
                <Route path='/' exact element={<Dashboard/>} />
                <Route path='/course' element={<Course/>} />
                <Route path='/settings' element={<Settings/>} />
                <Route path='/help_center' element={<HelpCenter/>} /> 
                <Route path='/letter-game' element={<DetectionSection />} />
                <Route path='/login' element={<LoginForm/>} />
              </Routes>
            </Router>
          </div>
        ) : (
          <LoginForm Login={Login} error={error} />
        )}
      </div>


    </div>
  );
}


export default App;
