import React from "react";
import { Leaf, Droplets, Wind, Sprout, TrendingUp, Users, Award } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "../Footer";

const Rewards = () => {
  // User achievements data
  const achievements = [
    {
      id: 1,
      title: "Carbon Footprint Reducer",
      description: "Reduced carbon emissions through sustainable practices.",
      progress: "75%",
      achieved: true,
      impact: "Saved 250kg of CO2",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
    },
    {
      id: 2,
      title: "Water Conservation Champion",
      description: "Adopted water-saving techniques.",
      progress: "60%",
      achieved: true,
      impact: "Saved 1,000 liters of water",
      icon: <Droplets className="w-6 h-6 text-blue-600" />,
    },
    {
      id: 3,
      title: "Renewable Energy Adopter",
      description: "Started transitioning to renewable energy sources.",
      progress: "40%",
      achieved: false,
      impact: "On track to save 500kWh",
      icon: <Wind className="w-6 h-6 text-teal-600" />,
    },
    {
      id: 4,
      title: "Green Garden Guardian",
      description: "Maintained a sustainable garden with native plants.",
      progress: "90%",
      achieved: true,
      impact: "Created habitat for 12 species",
      icon: <Sprout className="w-6 h-6 text-green-600" />,
    },
  ];

  return (
    <>
    <Navbar />
    <div className="container mx-auto p-6">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Your Rewards</h1>
        <p className="text-gray-600">Track your progress and achievements.</p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <TrendingUp className="w-8 h-8 text-teal-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">2,500+</div>
          <p className="text-gray-600">Total Points</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Users className="w-8 h-8 text-teal-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">30</div>
          <p className="text-gray-600">Day Streak</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Award className="w-8 h-8 text-teal-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">5</div>
          <p className="text-gray-600">Badges Earned</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <Sprout className="w-8 h-8 text-teal-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">10</div>
          <p className="text-gray-600">Initiatives Completed</p>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold text-teal-800 mb-4">Achievements</h2>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`flex items-start gap-4 p-4 border rounded-lg ${
                achievement.achieved ? "border-green-200" : "border-gray-200"
              }`}
            >
              <div
                className={`rounded-full p-3 ${
                  achievement.achieved ? "bg-green-100" : "bg-gray-100"
                }`}
              >
                {achievement.icon}
              </div>
              <div className="flex-1">
                <h3
                  className={`font-bold ${
                    achievement.achieved ? "text-green-700" : "text-gray-700"
                  }`}
                >
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className={`h-2 rounded-full ${
                      achievement.achieved ? "bg-green-500" : "bg-teal-200"
                    }`}
                    style={{ width: achievement.progress }}
                  ></div>
                </div>
                <p className="mt-2 text-sm text-teal-600">{achievement.impact}</p>
              </div>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  achievement.achieved
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {achievement.progress}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Rewards;
