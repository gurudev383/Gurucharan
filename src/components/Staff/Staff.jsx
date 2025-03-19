import React from "react";
import { useState } from "react";
//Images
import Naveen from '../../../src/assets/Principal.png'
import Sanjay from '../../../public/MsgDesk/Manager.png'
import Suryansh from '../../../public/MsgDesk/Directer.jpg'
import Nanha from '../../../public/Staff/Nanha_Lal.png'
import Mahmood from '../../../public/Staff/Mahmood.jpg'
import SanjayRaj from '../../../public/Staff/Sanjay.jpg'
import Dummy from '../../../src/assets/teacher.png'

const staffMembers = [
  {
    id: 1,
    name: "Naveen Kumar Pandey",
    qualification: "B.Ed. (English)",
    image: Naveen,
  },
  {
    id: 2,
    name: "Sanjay Kumar",
    qualification: "M.A. (Economics)",
    image: SanjayRaj,
  },
  {
    id: 3,
    name: "Suryansh Srivastava",
    qualification: "M.Sc. (Agronomy)",
    image: Suryansh,
  },
  {
    id: 4,
    name: "Nanha Lal",
    qualification: "B.Ed. (English)",
    image: Nanha,
  },
  {
    id: 5,
    name: "Rakesh Kumar Maurya",
    qualification: "M.Sc. (Math)",
    image: Dummy,
  },
  {
    id: 6,
    name: "Mahmood Ali",
    qualification: "B.Ed. (SST)",
    image: Mahmood,
  },
  {
    id: 7,
    name: "Sanjay Raj",
    qualification: "B.Ed. (SST)",
    image: Sanjay,
  },
];

export default function Staff() {
  const [viewMode, setViewMode] = useState("table"); // Default to table view

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Our Staff</h2>

      {/* Toggle Button */}
      <div className="flex justify-center mb-6">
        <button
        style={{background: "#0D0C22"}}
          onClick={() => setViewMode(viewMode === "table" ? "card" : "table")}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Switch to {viewMode === "table" ? "Card View" : "Table View"}
        </button>
      </div>

      {/* Table View */}
      {viewMode === "table" ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md">
            <thead className="bg-gray-700 text-white">
              <tr className="uppercase text-sm font-semibold">
                <th className="py-3 px-4 border">Sr No</th>
                <th className="py-3 px-4 border">Image</th>
                <th className="py-3 px-4 border">Name</th>
                <th className="py-3 px-4 border">Qualification</th>
              </tr>
            </thead>
            <tbody>
              {staffMembers.map((staff, index) => (
                <tr
                  key={staff.id}
                  className="text-gray-900 text-center border-b even:bg-gray-100 hover:bg-gray-200"
                >
                  <td className="py-3 px-4 border">{index + 1}</td>
                  <td className="py-3 px-4 border">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-12 h-12 rounded-full mx-auto"
                    />
                  </td>
                  <td className="py-3 px-4 border">{staff.name}</td>
                  <td className="py-3 px-4 border">{staff.qualification}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Card View
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {staffMembers.map((staff) => (
            <div
              key={staff.id}
              className="bg-white shadow-lg rounded-lg p-6 text-center border hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={staff.image}
                alt={staff.name}
                className="w-44 h-44 rounded-full mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900">{staff.name}</h3>
              <p className="text-gray-800 text-xl mt-2">{staff.qualification}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


// export default Staff;
