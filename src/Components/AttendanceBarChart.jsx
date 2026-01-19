import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

// Sample data for 5 weeks
const attendanceData = [
  { week: "Week 1", attendance: 85 },
  { week: "Week 2", attendance: 90 },
  { week: "Week 3", attendance: 75 },
  { week: "Week 4", attendance: 95 },
  { week: "Week 5", attendance: 88 },
];

function AttendanceBarChart() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md m-10 w-full ">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Weekly Attendance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={attendanceData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis domain={[0, 100]} /> {/* Y-axis graded 0-100 */}
          <Tooltip />
          <Legend />
          <Bar dataKey="attendance" fill="#5687F2
" barSize={120} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AttendanceBarChart;
