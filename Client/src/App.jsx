import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Organization/Navbar';
import UDashboard from './Components/User/UDashboard';
import ProjectDetail from './Components/User/ProjectDetail';
import Footer from './Components/Footer';
import Dashboard from './Pages/Organization/Dashboard';
import ContactUs from './Pages/Organization/ContactUs';
import ProjectsPage from './Pages/Organization/ProjectsPage';
import IndividualProjectPage from './Pages/Organization/IndividualProjectPage';
import VolunteersPage from './Pages/Organization/VolunteersPage';
import Leaderboard from './Pages/Organization/Leaderboard';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Define routes here */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/user" element={<UDashboard />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/organisation" element={<Dashboard />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<IndividualProjectPage />} />
        <Route path="/volunteers" element={<VolunteersPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
