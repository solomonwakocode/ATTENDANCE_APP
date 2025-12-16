import React, { useState } from "react";
import Notificationbell from "/notificationbell.png";
import admin from "/admin.png";
import arrow from "/arrow.png";
import { motion, AnimatePresence } from "framer-motion";
import Profile from "/profile.png";
import Changeprofile from "/changepassword.png";
import Logout from "/logout.png";

function Adminprofile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center p-10 gap-3 h-25 justify-end">
      <img src={Notificationbell} className="h-5" />

      <img src={admin} className="h-10 rounded-2xl" />

      <div className="flex flex-col items-end">
        <h4 className="font-bold text-orange-600">Favour Adeshina</h4>
        <p className="text-gray-500 text-sm">Admin</p>
      </div>

      {/* Arrow + Dropdown */}
      <div className="relative">
        {/* Toggle */}
        <button onClick={() => setOpen(!open)} className="focus:outline-none">
          <img
            src={arrow}
            alt="toggle"
            className={`w-7 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute right-0 mt-2 w-52 bg-white border rounded-xl shadow-lg overflow-hidden z-50"
            >
              <button className="w-full px-4 py-3 text-left hover:bg-gray-100 flex gap-2">
                <img src={Profile} className="w-5 h-5" />
                Profile
              </button>

              <button className="w-full px-4 py-3 text-left hover:bg-gray-100 flex gap-2">
                <img src={Changeprofile} className="w-4 h-5" />
                Change Password
              </button>

              <button className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 flex gap-2">
                <img src={Logout} className="w-4 h-5" />
                Log out
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Adminprofile;
