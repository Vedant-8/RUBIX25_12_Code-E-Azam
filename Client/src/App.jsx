import { useState, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UDashboard from "./Components/User/UDashboard";
import ProjectDetail from "./Components/User/ProjectDetail";
import Dashboard from "./Pages/Organization/Dashboard";
import ContactUs from "./Pages/Organization/ContactUs";
import ProjectsPage from "./Pages/Organization/ProjectsPage";
import IndividualProjectPage from "./Pages/Organization/IndividualProjectPage";
import VolunteersPage from "./Pages/Organization/VolunteersPage";
import Leaderboard from "./Pages/Organization/Leaderboard";
import LandingPage from "./Pages/LandingPage";
import Rewards from "./Components/User/Rewards";
import Volunteer from "./Components/User/Volunteer";
import Shop from "./Components/User/Shop";
import Blog from "./Components/User/Blog";
import Suggestion from "./Utils/User/Suggestion";
import AnalyticsPage from "./Pages/Admin/AnalyticsPage";
import ADashboard from "./Pages/Admin/ADashboard";
import CostEstimation from "./Utils/Organisation/CostEstimation";
import AdminShopPage from "./Pages/Admin/AdminShopPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Game from "./Utils/User/Games/Game";

// Create a context for authentication
export const AuthContext = createContext();

function App() {
  const [userRole, setUserRole] = useState(null); // Stores user role ("User", "Organisation", or "Admin")

  return (
    <AuthContext.Provider value={{ userRole, setUserRole }}>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Role-Based Protected Routes */}
          {/* User Routes */}
          <Route
            path="/user"
            element={
              <PrivateRoute role="User">
                <UDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/project/:id"
            element={
              <PrivateRoute role="User">
                <ProjectDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/volunteer"
            element={
              <PrivateRoute role="User">
                <Volunteer />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/rewards"
            element={
              <PrivateRoute role="User">
                <Rewards />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/shop"
            element={
              <PrivateRoute role="User">
                <Shop />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/educational"
            element={
              <PrivateRoute role="User">
                <Blog />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/suggestion"
            element={
              <PrivateRoute role="User">
                <Suggestion />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/games"
            element={
              <PrivateRoute role="User">
                <Game />
              </PrivateRoute>
            }
          />

          {/* Organization Routes */}
          <Route
            path="/organisation"
            element={
              <PrivateRoute role="Organisation">
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/organisation/contact"
            element={
              <PrivateRoute role="Organisation">
                <ContactUs />
              </PrivateRoute>
            }
          />
          <Route
            path="/organisation/projects"
            element={
              <PrivateRoute role="Organisation">
                <ProjectsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/organisation/projects/:id"
            element={
              <PrivateRoute role="Organisation">
                <IndividualProjectPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/organisation/volunteers"
            element={
              <PrivateRoute role="Organisation">
                <VolunteersPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/organisation/leaderboard"
            element={
              <PrivateRoute role="Organisation">
                <Leaderboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/organisation/costEstimation"
            element={
              <PrivateRoute role="Organisation">
                <CostEstimation />
              </PrivateRoute>
            }
          />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <PrivateRoute role="Admin">
                <ADashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/analytics"
            element={
              <PrivateRoute role="Admin">
                <AnalyticsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/shop"
            element={
              <PrivateRoute role="Admin">
                <AdminShopPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
}

// PrivateRoute Component
const PrivateRoute = ({ children, role }) => {
  const { userRole } = useContext(AuthContext);

  if (!userRole) {
    // If not logged in, redirect to login
    return <Navigate to="/login" />;
  }

  if (userRole !== role) {
    // If user doesn't have the required role, redirect to a forbidden page or landing
    return <Navigate to="/" />;
  }

  return children;
};

export default App;
