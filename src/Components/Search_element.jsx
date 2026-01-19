import React, { useState } from "react";
import glass from "/glass.png";
import arrow from "/arrow.png";
import { motion } from "framer-motion";

function Search_element() {
  const [track, setTrack] = useState(""); // controlled track select
  const [sort, setSort] = useState("");   // controlled sort select

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Search Input */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="relative w-full md:w-1/2"
      >
        <img
          src={glass}
          alt="search"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 pointer-events-none"
        />
        <input
          type="text"
          id="search"
          placeholder="Search"
          className="w-full px-4 py-2 pl-14 rounded-lg border border-gray-300
          bg-gray-300 text-gray-700 placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </motion.div>

      {/* All Tracks Select */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full md:w-1/4"
      >
        <div className="relative">
          <img
            src={arrow}
            alt="dropdown"
            className={`absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 transition-transform duration-200 ${
              track ? "rotate-180" : ""
            }`}
          />
          <select
            id="tracks"
            value={track} // controlled value
            onChange={(e) => setTrack(e.target.value)}
            className="w-full px-4 py-2 pr-14 rounded-lg border border-gray-300
              bg-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400
              appearance-none"
          >
            <option value="" disabled>
              All Tracks
            </option>
            <option value="frontend">Frontend Development</option>
            <option value="backend">Backend Development</option>
            <option value="data">Data Analysis</option>
          </select>
        </div>
      </motion.div>

      {/* Sort By Date Select */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full md:w-1/4"
      >
        <div className="relative">
          <img
            src={arrow}
            alt="dropdown"
            className={`absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 transition-transform duration-200 ${
              sort ? "rotate-180" : ""
            }`}
          />
          <select
            id="sort"
            value={sort} // controlled value
            onChange={(e) => setSort(e.target.value)}
            className="w-full px-4 py-2 pr-14 rounded-lg border border-gray-300
              bg-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400
              appearance-none"
          >
            <option value="" disabled>
              Sort By Date
            </option>
            <option value="7days">Last 7 Days</option>
            <option value="14days">Last 14 Days</option>
            <option value="21days">Last 21 Days</option>
            <option value="30days">Last 30 Days</option>
          </select>
        </div>
      </motion.div>
    </div>
  );
}

export default Search_element;
