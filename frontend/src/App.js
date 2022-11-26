// import React, { useState } from 'react';
import './assets/styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import Settings from './pages/Settings';
import HelpCenter from './pages/HelpCenter';
import DetectionSection from './pages/lettergame/DetectionSection';
import InstructionSection from './pages/lettergame/InstructionSection';
import Login from './pages/Login';
import QuestionSection from './pages/lettergame/QuestionSection';
import Test from './pages/lettergame/Test';
import Register from './pages/Register';

function App() {
  // const adminUser = {
  //   email: 'admin@admin.com',
  //   password: 'admin123'
  // }

  // const [user, setUser] = useState({name: "", email: ""});
  // const [error, setError] = useState("");

  // const Login = details => {
  //   console.log(details);
  //   if (details.email === adminUser.email && details.password === adminUser.password){
  //     console.log("Logged in");
  //     setUser({
  //       name: details.name,
  //       email: details.email
  //     }); 
  //   }
  //   else {
  //     console.log("Details do not match!");
  //     setError("Details do not match!");
  //   }
  // }

  // const Logout = () => {
  //   console.log("details do not match!");
  //   setUser ({ name: "", email: ""})
  // }

  return (
    <div>
      <div>
        <div className='welcome'>
          <Router>
            <Routes>
              <Route path='/' exact element={<Dashboard/>} />
              <Route path='/course' element={<Course/>} />
              <Route path='/settings' element={<Settings/>} />
              <Route path='/help_center' element={<HelpCenter/>} /> 
              <Route path='/letter-game' element={<DetectionSection />} />
              <Route path='/instruction-section' element={<InstructionSection />} />
              <Route path='/letter-game' element={<DetectionSection />} />
              <Route path='/question' element={<QuestionSection/>} />
              <Route path='/sign-in' element={<Login />} />
              <Route path='/sign-up' element={<Register />} />
              <Route path='/test' element={<Test/>} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}


export default App;
