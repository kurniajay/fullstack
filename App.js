// src/App.js
import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import './App.css';

function App() {
  const userData = {
    name: 'Prashanth K',
    address: 'Kengeri',
    phone: '1234567890',
    email: 'prashanthk@rvce.edu.in',
  };

  const experienceData = {
    company: 'ABC Pvt Ltd',
    role: 'Software Intern',
    years: '2024–2025',
  };

  const educationData = [
    { id: 1, name: 'National Public School', place: 'Bengaluru', education: '10th', grade: 'A+' },
    { id: 2, name: 'Indian Institute of Science', place: 'Bengaluru', education: 'Undergraduate', grade: '9.8' },
  ];

  return (
    <div className="App">
      <Header
        name={userData.name}
        address={userData.address}
        phone={userData.phone}
        email={userData.email}
      />

      <Experience
        company={experienceData.company}
        role={experienceData.role}
        years={experienceData.years}
      />

      <Education education={educationData} />
    </div>
  );
}

export default App;

