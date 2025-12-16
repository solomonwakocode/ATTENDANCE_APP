import React from "react";
import { motion } from "framer-motion";

function AttendanceCards() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="bg-[#FAFF6D] shadow-lg rounded-xl p-6 w-60 flex flex-col items-center justify-center text-center"
    >
      <h3 className="text-orange-600 text-lg font-extrabold">
        Attendance
      </h3>

      <h2 className="text-orange-600 font-extrabold text-7xl my-2">
        60%
      </h2>

      <p className="text-2xl font-bold text-[#D64700]">
        24% Absent
      </p>
    </motion.div>
  );
}

export default AttendanceCards;
