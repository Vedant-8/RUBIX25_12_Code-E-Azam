import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaClock, FaProjectDiagram } from "react-icons/fa";

const VolunteersPage = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    fetch("./volunteers.json")
      .then((response) => response.json())
      .then((data) => setVolunteers(data))
      .catch((error) => console.error("Error fetching volunteer data:", error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Volunteers</h1>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700">Total Volunteers</h2>
            <p className="text-4xl font-bold text-green-500 mt-4">{volunteers.length}</p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700">Total Hours Worked</h2>
            <p className="text-4xl font-bold text-blue-500 mt-4">
              {volunteers.reduce((total, vol) => total + vol.hoursWorked, 0)}
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-700">Projects Supported</h2>
            <p className="text-4xl font-bold text-purple-500 mt-4">
              {[...new Set(volunteers.map((vol) => vol.project))].length}
            </p>
          </div>
        </div>

        {/* Volunteers List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteers.map((volunteer) => (
            <div
              key={volunteer.id}
              className="bg-white shadow-xl rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-800">{volunteer.name}</h3>
                <p className="text-sm text-gray-500">{volunteer.project}</p>
              </div>
              <p className="text-gray-600 mt-2">{volunteer.details}</p>
              
              {/* Volunteer Information */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <FaMapMarkerAlt className="text-green-500" />
                  <span>{volunteer.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <FaClock className="text-blue-500" />
                  <span>{volunteer.hoursWorked} hours worked</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <FaProjectDiagram className="text-purple-500" />
                  <span>{volunteer.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteersPage;
