
import logo from "/ekiti_logo.png";
import Dashboard from "/dashboard.png";
import Profile from "/profile.png"

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 h-screen p-5 flex flex-col border-r border-gray-300">
      <div className="flex justify-center mb-8">
        <img src={logo} alt="logo" className="w-24" />
      </div>

      <div className="space-y-4">
        <button className="flex items-center gap-3 text-orange-600 font-semibold">
          <img src={Dashboard} alt="Dashboard" />
          Dashboard
        </button>

        <button className="flex items-center gap-2 text-gray-400 hover:text-orange-600">
          <img src= {Profile} alt="profile" />
          Manage Attendance
        </button>
      </div>
    </div>
  );
}