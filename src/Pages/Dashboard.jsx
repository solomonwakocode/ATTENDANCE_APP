import React from "react";
import Sidebar from "../Components/Adminsidebar";
import Adminprofile from "../Components/Adminprofile";
import Panel_info from "../Components/Panel_info";

import TotalStudentCards from "../Components/TotalStudentCards";
import AttendanceCards from "../Components/AttendanceCards";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="w-full pl-5 ">
        <Adminprofile />
        <div className="w-full h-[0.5px] bg-[#A8B9CA] "></div>
        <Panel_info />
        <div className="flex space-x-10 ">
          <TotalStudentCards />
          <AttendanceCards />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
