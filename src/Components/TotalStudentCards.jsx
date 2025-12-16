import React from "react";
import { motion } from "framer-motion";

function TotalStudentCards() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className="shadow-lg rounded-xl p-6 w-60 bg-[#FFD82A] flex flex-col items-center justify-center text-center text-black font-bold"
    >
      <h3 className="text-lg">Total Students</h3>

      <h2 className="text-7xl font-extrabold my-2">
        28
      </h2>

      <p className="text-2xl">
        5 tracks
      </p>
    </motion.div>
  );
}

export default TotalStudentCards;
