import React, { useState, useEffect } from "react";
import AnalyticHeader from "../../Components/admin/AnalyticHeader";
import LeaderboardTable from "../../Components/admin/LeaderboardTable";
import ProjectList from "../../Components/admin/ProjectList";
import Navbar from "../../Components/admin/Navbar";
import Footer from "../../Components/Footer";
import organizationsData from "../../assets/orgs.json";

const AnalyticsPage = () => {
  const [organizations, setOrganizations] = useState(organizationsData.organizations);

  // Fetch the organizations data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/orgs.json"); // Fetching from public folder
        const data = await response.json();
        setOrganizations(data.organizations);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Sorting organizations based on total impact (CO2 + Trees + Water Saved)
  const sortedOrganizations = organizations.sort((a, b) => {
    const totalImpactA = a.co2_reduction + a.trees_planted + a.water_saved;
    const totalImpactB = b.co2_reduction + b.trees_planted + b.water_saved;
    return totalImpactB - totalImpactA; // Sorting in descending order
  });

  return (
    <>
      <Navbar />
      <div className="p-6">
        <AnalyticHeader organizations={organizations} />

        <div className="flex mt-8">
          {/* Left Section (Project List) */}
          <div className="w-1/3 p-6 bg-gray-100">
            <h2 className="text-2xl font-semibold mb-4">Projects</h2>
            <ProjectList organizations={organizations} />
          </div>

          {/* Right Section (Leaderboard Table) */}
          <div className="w-2/3 p-6">
            <LeaderboardTable sortedOrganizations={sortedOrganizations} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AnalyticsPage;
