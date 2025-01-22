import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UDashboard from './Components/User/UDashboard';
import ProjectDetail from './Components/User/ProjectDetail';
import Dashboard from './Pages/Organization/Dashboard';
import ContactUs from './Pages/Organization/ContactUs';
import ProjectsPage from './Pages/Organization/ProjectsPage';
import IndividualProjectPage from './Pages/Organization/IndividualProjectPage';
import VolunteersPage from './Pages/Organization/VolunteersPage';
import Leaderboard from './Pages/Organization/Leaderboard';
import LandingPage from './Pages/LandingPage';
import Rewards from './Components/User/Rewards';
import Volunteer from './Components/User/Volunteer';

function App() {
  return (
    <Router>
      
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<LandingPage />} />

        {/* User routes */}
        <Route path="/user" element={<UDashboard />} />
        <Route path="/user/project/:id" element={<ProjectDetail />} />
        <Route path="/user/volunteer" element={<Volunteer />} />
        <Route path="/user/rewards" element={<Rewards />} />

        {/* Organization routes */}
        <Route path="/organisation" element={<Dashboard />} />
        <Route path="/organisation/contact" element={<ContactUs />} />
        <Route path="/organisation/projects" element={<ProjectsPage />} />
        <Route path="/organisation/projects/:id" element={<IndividualProjectPage />} />
        <Route path="/organisation/volunteers" element={<VolunteersPage />} />
        <Route path="/organisation/leaderboard" element={<Leaderboard />} />
        
      </Routes>
      
    </Router>
  );
}

export default App;
