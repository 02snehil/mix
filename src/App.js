import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from './components/Main';
import Login from './components/Login'
import Register from './components/Register'
import Welcome from './components/Welcome';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';


function App() {
  return (
    <Router>
       <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/welcome' element={<Welcome />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/privacy' element={<PrivacyPolicy />} />
       </Routes>
    </Router>
    
  );
}

export default App;
