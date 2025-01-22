import React from "react";

const RecentDonars = () => {
  const Donations = [
    { user: "John Doe", amount: "$500", project: "Solar Panels", date: "2025-01-20" },
    { user: "Jane Smith", amount: "$300", project: "Community Garden", date: "2025-01-18" },
    { user: "Alice Johnson", amount: "$700", project: "Recycling Program", date: "2025-01-15" },
    { user: "Alice Johnson", amount: "$700", project: "Recycling Program", date: "2025-01-15" },
    { user: "Alice Johnson", amount: "$700", project: "Recycling Program", date: "2025-01-15" },
    { user: "Alice Johnson", amount: "$700", project: "Recycling Program", date: "2025-01-15" },
    { user: "Alice Johnson", amount: "$700", project: "Recycling Program", date: "2025-01-15" },
    { user: "Alice Johnson", amount: "$700", project: "Recycling Program", date: "2025-01-15" },
    { user: "Alice Johnson", amount: "$700", project: "Recycling Program", date: "2025-01-15" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4 max-h-80 overflow-y-auto">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Donors</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">User</th>
            <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Amount</th>
            <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Project</th>
            <th className="py-2 px-4 border-b text-left text-sm font-semibold text-gray-600">Date</th>
          </tr>
        </thead>
        <tbody>
          {Donations.map((Donation, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b text-sm text-gray-600">{Donation.user}</td>
              <td className="py-2 px-4 border-b text-sm text-green-600 font-bold">{Donation.amount}</td>
              <td className="py-2 px-4 border-b text-sm text-blue-500 italic">{Donation.project}</td>
              <td className="py-2 px-4 border-b text-sm text-gray-600">{Donation.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentDonars;
