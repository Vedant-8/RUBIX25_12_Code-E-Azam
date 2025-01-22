import React from "react";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import ProjectTable from "../components/ProjectTable";
import RecentDonars from "../Components/RecentDonars";

const Dashboard = () => {
  return (
    <div className="min-h-[80vh] bg-gray-100">
      <Header />
      <div className="p-6 space-y-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatsCard title="Total Funds Raised" value="$50,000" />
          <StatsCard title="Active Projects" value="3" />
          <StatsCard title="Volunteer Count" value="8" />
          <StatsCard title="Total Donars" value="25" />
        </div>

        {/* Projects and Investments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProjectTable />
          <RecentDonars />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
