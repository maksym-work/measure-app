import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import NewAssessment from './components/NewAssessment';
import AssessmentPage from './components/AssessmentPage';
import "./App.css"
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const App: React.FC = () => {
  const user = useSelector(selectUser)
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={user ? <Home />:<Navigate to={'/'} />} />
        <Route path="/new-assessment" element={<NewAssessment />} />
        <Route path="/assessment-page" element={<AssessmentPage />} />
      </Routes>
    </div>
  );
};

export default App;
