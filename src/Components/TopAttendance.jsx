import React from "react";
import demoStudents from "./demoData"; // make sure path is correct

function TopAttendance() {
  // Sort students by attendance descending and pick top 10
  const topStudents = [...demoStudents]
    .sort((a, b) => b.attendance - a.attendance)
    .slice(0, 10);

  return (
    <div className="overflow-x-auto bg-gray-200 p-4 rounded-lg m-10 w-full">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Top 10 Attendance</h2>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="bg-gray-500 text-white">
          <tr>
            <th className="px-4 py-2">#No</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Attendance %</th>
          </tr>
        </thead>
        <tbody>
          {topStudents.map((student, index) => (
            <tr
              key={student.id}
              className={` ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{student.name}</td>
              <td className="px-4 py-2 font-semibold">{student.attendance}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopAttendance;
