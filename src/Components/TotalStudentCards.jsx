import React from "react";

function TotalStudentCards( ) {
  return (
    <div className=" flex shadow-lg rounded-xl p-6 w-60 bg-[#FFD82A] flex-col items-center justify-center text-black font-bold">
      {/* Total Students */}
      <div className="mb-4">
        <h3 className=" text-lg">Total Students </h3>
        <h2 className="text-7xl font-extrabold">28</h2>
        <p className="text-2xl  ">5 tracks</p>
      </div>
    </div>
  );
}

export default TotalStudentCards;
