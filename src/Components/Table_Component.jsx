import React from 'react'
import React, { useEffect, useState } from "react";

function Table_Component() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace this URL with your real API endpoint
    fetch("https://api.example.com/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  }, []);

  return (
   <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">#No</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Track</th>
            <th className="px-4 py-2 border">Phone Number</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Attendance %</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr
              key={student.id || index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-4 py-2 border text-center">{index + 1}</td>
              <td className="px-4 py-2 border">{student.name}</td>
              <td className="px-4 py-2 border">{student.track}</td>
              <td className="px-4 py-2 border">{student.phone}</td>
              <td className="px-4 py-2 border">{student.email}</td>
              <td className="px-4 py-2 border text-center">{student.attendance}%</td>
              <td className="px-4 py-2 border text-center">
                <button className="px-2 py-1 bg-orange-500 text-white rounded hover:bg-orange-600">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table_Component
