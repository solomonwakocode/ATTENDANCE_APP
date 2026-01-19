import React from "react";
import Sidebar from "../Components/Adminsidebar";
import Adminprofile from "../Components/Adminprofile";
import Panel_info from "../Components/Panel_info";
import TotalStudentCards from "../Components/TotalStudentCards";
import AttendanceCards from "../Components/AttendanceCards";
import Student_list_view from "../Components/Student_list_view";
import Search_element from "../Components/Search_element";
import Table_Component from "../Components/Table_Component";
import TopAttendance from "../Components/TopAttendance";
import AttendanceBarChart from "../Components/AttendanceBarChart";

function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-5">
        {/* Admin profile */}
        <Adminprofile />

        {/* Divider */}
        <div className="w-full h-[0.5px] bg-[#A8B9CA] my-4"></div>

        {/* Panel info */}
        <Panel_info />

        {/* Cards Section */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 mb-6 space-y-4 sm:space-y-0 justify-center items-center">
          <TotalStudentCards />
          <AttendanceCards />
        </div>

        {/* Student List */}
        <Student_list_view />

        {/* Search */}
        <div className="my-4">
          <Search_element />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <Table_Component />
          <div className="flex">
          <TopAttendance />
          <AttendanceBarChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
