import React from "react";

function AttendanceCards() {
  return (
    <div className="bg-[#FAFF6D] shadow-lg rounded-xl p-6 w-60 ">
      {/* Total Students */}
      <div className="mb-4">
        <h3 className="text-orange-600 text-lg font-extrabold">Attendance</h3>
        <h2 className="text-orange-600  font-extrabold text-7xl">60%</h2>
        <p className="text-2xl font-bold text-orange-600">24% Absent</p>
      </div>
    </div>
  );
}

export default AttendanceCards;
