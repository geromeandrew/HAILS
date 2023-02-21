import React from 'react';
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
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Steptry from './pages/lettergame/steptry';
import EmailVerify from './components/EmailVerify';
import QuizGame from './pages/lettergame/QuizGame';
import Timeline from './components/Timeline/Timeline';
import LoginFormat from './pages/LoginFormat';

function App() {
  return (
    <div>
      <div>
        <div className='welcome'>
          <Router>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/dashboard' exact element={<Dashboard/>} />
              <Route path='/course' element={<Course/>} />
              <Route path='/settings' element={<Settings/>} />
              <Route path='/help-center' element={<HelpCenter/>} /> 
              <Route path='/letter-game' element={<DetectionSection />} />
              <Route path='/instruction-section/:id' element={<InstructionSection />} />
              <Route path='/letter-game/:id' element={<DetectionSection />} />
              <Route path='/question' element={<QuestionSection/>} />
              {/* <Route path='/quiz-game/:id' element={<Test/>} /> */}
              <Route path='/sign-up' element={<Register />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
              <Route path='/quiz-game/:id' element={<QuizGame/>} />
              <Route path='/try' element={<Steptry/>} />
              <Route path='/forgot-password/email-verify' element={<EmailVerify/>} />
              <Route path='/timeline' element={<Timeline/>} />
              <Route path='/loginformat' element={<LoginFormat/>} />
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}


export default App;
