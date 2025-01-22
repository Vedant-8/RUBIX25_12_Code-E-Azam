import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticsPage = () => {
  const [organizations, setOrganizations] = useState([]);

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
    <div className="container mx-auto p-6">
      {/* Visual Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {/* Total CO2 Reduced */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-semibold text-blue-600">🌍</span>
            <div>
              <h3 className="text-lg font-medium">Total CO2 Reduced</h3>
              <p className="text-2xl font-bold text-gray-800">
                {organizations.reduce(
                  (total, org) => total + org.co2_reduction,
                  0
                )}{" "}
                tons
              </p>
            </div>
          </div>
        </div>

        {/* Total Trees Planted */}
        <div className="bg-green-100 p-6 rounded-lg shadow-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-semibold text-green-600">🌱</span>
            <div>
              <h3 className="text-lg font-medium">Total Trees Planted</h3>
              <p className="text-2xl font-bold text-gray-800">
                {organizations.reduce(
                  (total, org) => total + org.trees_planted,
                  0
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Total Water Saved */}
        <div className="bg-yellow-100 p-6 rounded-lg shadow-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-semibold text-yellow-600">💧</span>
            <div>
              <h3 className="text-lg font-medium">Total Water Saved</h3>
              <p className="text-2xl font-bold text-gray-800">
                {organizations.reduce(
                  (total, org) => total + org.water_saved,
                  0
                )}{" "}
                liters
              </p>
            </div>
          </div>
        </div>

        {/* Total Volunteers */}
        <div className="bg-purple-100 p-6 rounded-lg shadow-lg flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-3xl font-semibold text-purple-600">🙋‍♀️</span>
            <div>
              <h3 className="text-lg font-medium">Total Volunteers</h3>
              <p className="text-2xl font-bold text-gray-800">
                {organizations.reduce(
                  (total, org) => total + org.volunteers_count,
                  0
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Leaderboard
      </h1>

      {/* Top 3 Organizations as Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-8">
        {sortedOrganizations.slice(0, 3).map((org, index) => {
          let bgColor = "bg-white"; // Default background color
          let trophyIcon = null;

          // Highlight 1st, 2nd, and 3rd place
          if (index === 0) {
            bgColor = "bg-yellow-300"; // 1st place
            trophyIcon = "🥇";
          } else if (index === 1) {
            bgColor = "bg-gray-300"; // 2nd place
            trophyIcon = "🥈";
          } else if (index === 2) {
            bgColor = "bg-orange-400"; // 3rd place
            trophyIcon = "🥉";
          }

          return (
            <div
              key={index}
              className={`${bgColor} shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-3xl">{trophyIcon}</span>
                <h2 className="text-2xl font-semibold text-gray-700">
                  {org.name}
                </h2>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between text-gray-600">
                  <span>CO2 Reduction</span>
                  <span>{org.co2_reduction} tons</span>
                </li>
                <li className="flex justify-between text-gray-600">
                  <span>Trees Planted</span>
                  <span>{org.trees_planted}</span>
                </li>
                <li className="flex justify-between text-gray-600">
                  <span>Water Saved</span>
                  <span>{org.water_saved} liters</span>
                </li>
                <li className="flex justify-between text-gray-600">
                  <span>Volunteers</span>
                  <span>{org.volunteers_count}</span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>

      {/* Remaining Organizations in Table Format with Rank */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Rank</th>
              <th className="border border-gray-300 p-2">Organization</th>
              <th className="border border-gray-300 p-2">CO2 Reduction</th>
              <th className="border border-gray-300 p-2">Trees Planted</th>
              <th className="border border-gray-300 p-2">Water Saved</th>
              <th className="border border-gray-300 p-2">Volunteers</th>
            </tr>
          </thead>
          <tbody>
            {sortedOrganizations.slice(3).map((org, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{index + 4}</td>{" "}
                {/* Rank starts from 4 */}
                <td className="border border-gray-300 p-2">{org.name}</td>
                <td className="border border-gray-300 p-2">
                  {org.co2_reduction} tons
                </td>
                <td className="border border-gray-300 p-2">
                  {org.trees_planted}
                </td>
                <td className="border border-gray-300 p-2">
                  {org.water_saved} liters
                </td>
                <td className="border border-gray-300 p-2">
                  {org.volunteers_count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnalyticsPage;
