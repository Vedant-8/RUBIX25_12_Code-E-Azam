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
import Shop from './Components/User/Shop';
import Blog from './Components/User/Blog';
import Suggestion from './Utils/User/Suggestion';

import AnalyticsPage from './Pages/Admin/AnalyticsPage'
import ADashboard from './Pages/Admin/ADashboard'
import CostEstimation from './Utils/Organisation/CostEstimation';
import AdminShopPage from './Pages/Admin/AdminShopPage'

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
        <Route path="/user/shop" element={<Shop />} />
        <Route path="/user/educational" element={<Blog />} />
        <Route path="/user/suggestion" element={<Suggestion />} />

        {/* Organization routes */}
        <Route path="/organisation" element={<Dashboard />} />
        <Route path="/organisation/contact" element={<ContactUs />} />
        <Route path="/organisation/projects" element={<ProjectsPage />} />
        <Route path="/organisation/projects/:id" element={<IndividualProjectPage />} />
        <Route path="/organisation/volunteers" element={<VolunteersPage />} />
        <Route path="/organisation/leaderboard" element={<Leaderboard />} />
        <Route path="/organisation/costEstimation" element={<CostEstimation />} />

        {/* Admin routes */}
        <Route path="/admin" element={<ADashboard />}/>
        <Route path="/admin/analytics" element={<AnalyticsPage />}/>
        <Route path="/admin/shop" element={<AdminShopPage />}/>
      </Routes>
      
    </Router>
  );
}

export default App;
