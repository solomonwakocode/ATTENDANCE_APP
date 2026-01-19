import React from "react";
import demoStudents from "./demoData";

function Table_Component() {
  return (
    <div className="bg-gray-200 rounded-lg p-2 ml-10 mr-10">
      {/* Scroll Container */}
      <div className="max-h-[300px] overflow-y-auto overflow-x-auto hide-scrollbar">
        <table className="min-w-full border-collapse">
          <thead className="bg-gray-600 text-white sticky top-0 z-10 ">
            <tr>
              <th className="px-4 py-2">#No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Track</th>
              <th className="px-4 py-2">Phone Number</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Attendance %</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            {demoStudents.map((student, index) => (
              <tr key={student.id} className="bg-gray-200 ">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.track}</td>
                <td className="px-4 py-2">{student.phone}</td>
                <td className="px-4 py-2">{student.email}</td>
                <td className="px-4 py-2">{student.attendance}%</td>
                <td className="px-4 py-2">
                  <button className="text-blue-600 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table_Component;
