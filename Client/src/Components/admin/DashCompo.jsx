import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import organizationsData from "../../assets/orgs.json";

const DashCompo = () => {
  const [showModal, setShowModal] = useState(false);
  const [organizations, setOrganizations] = useState(organizationsData.organizations);
  const [reviewOrganizations, setReviewOrganizations] = useState([
    {
      name: "Org Three",
      email: "org3@example.com",
      description: "Focused on tree plantation.",
    },
    {
      name: "Org Four",
      email: "org4@example.com",
      description: "Working on water conservation.",
    },
  ]);

  // Fetch organizations from the JSON file (simulated here)
  useEffect(() => {
    fetch("/path/to/orgs.json")
      .then((response) => response.json())
      .then((data) => {
        const approvedOrgs = data.organizations.filter(org => org.status === 'Approved');
        setOrganizations(approvedOrgs);
      });
  }, []);

  return (
    <div className="p-8 space-y-6">
      {/* General Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-6 bg-blue-500 text-white rounded-lg shadow">
          <h2 className="text-xl font-bold">Orgs</h2>
          <p className="text-3xl">10</p>
        </div>
        <div className="p-6 bg-green-500 text-white rounded-lg shadow">
          <h2 className="text-xl font-bold">Users</h2>
          <p className="text-3xl">150</p>
        </div>
        <div className="p-6 bg-yellow-500 text-white rounded-lg shadow">
          <h2 className="text-xl font-bold">Shop Revenue</h2>
          <p className="text-3xl">$5000</p>
        </div>
      </div>

      {/* Review New Orgs Button */}
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 mb-4"
      >
        Review New Orgs
      </button>

      {/* Organizations Table */}
      <div className="bg-white shadow rounded-lg max-h-50 overflow-y-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">S/N</th> {/* Added Serial Number column */}
              <th className="px-4 py-2">Organization Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Contact</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody className="max-h-20 overflow-y-auto">
            {organizations.map((org, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-4 py-2">{idx + 1}</td> {/* Serial Number */}
                <td className="px-4 py-2">
                  <Link
                    to={`/admin/${org.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    {org.name}
                  </Link>
                </td>
                <td className="px-4 py-2">
                  {org.email || "dummy@example.com"} {/* Handle empty email */}
                </td>
                <td className="px-4 py-2">
                  {org.contact || "N/A"} {/* Handle empty contact */}
                </td>
                <td className="px-4 py-2">
                  {org.status || "Pending"} {/* Handle empty status */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-1/2 space-y-4">
            <h3 className="text-lg font-bold">Review New Organizations</h3>
            <div className="space-y-4">
              {reviewOrganizations.map((org, idx) => (
                <div key={idx} className="border p-4 rounded-lg">
                  <h4 className="font-semibold">{org.name}</h4>
                  <p className="text-sm">Email: {org.email}</p>
                  <p className="text-sm">Description: {org.description}</p>
                  <div className="flex space-x-2 mt-2">
                    <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                      Accept
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowModal(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashCompo;
