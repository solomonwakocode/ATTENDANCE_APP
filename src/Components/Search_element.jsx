import React, { useState } from "react";
import glass from "/glass.png";
import arrow from "/arrow.png";
import { motion } from "framer-motion";

function Search_element() {
  const [tracksOpen, setTracksOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

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
        {/* Toggle Button for arrow rotation */}
        <button
          onClick={() => setTracksOpen(!tracksOpen)}
          className="w-full text-left focus:outline-none"
        >
          <div className="relative">
            <img
              src={arrow}
              alt="dropdown"
              className={`absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 transition-transform duration-200 ${
                tracksOpen ? "rotate-180" : ""
              }`}
            />
            <select
              id="tracks"
              className="w-full px-4 py-2 pr-14 rounded-lg border border-gray-300
              bg-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400
              appearance-none"
              onClick={() => setTracksOpen(!tracksOpen)}
            >
              <option value="" disabled selected>
                All Tracks
              </option>
              <option value="frontend">Frontend Development</option>
              <option value="backend">Backend Development</option>
              <option value="data">Data Analysis</option>
            </select>
          </div>
        </button>
      </motion.div>

      {/* Sort By Date Select */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full md:w-1/4"
      >
        <button
          onClick={() => setSortOpen(!sortOpen)}
          className="w-full text-left focus:outline-none"
        >
          <div className="relative">
            <img
              src={arrow}
              alt="dropdown"
              className={`absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 transition-transform duration-200 ${
                sortOpen ? "rotate-180" : ""
              }`}
            />
            <select
              id="sort"
              className="w-full px-4 py-2 pr-14 rounded-lg border border-gray-300
              bg-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400
              appearance-none"
              onClick={() => setSortOpen(!sortOpen)}
            >
              <option value="" disabled selected>
                Sort By Date
              </option>
              <option value="7days">Last 7 Days</option>
              <option value="14days">Last 14 Days</option>
              <option value="21days">Last 21 Days</option>
              <option value="30days">Last 30 Days</option>
            </select>
          </div>
        </button>
      </motion.div>
    </div>
  );
}

export default Search_element;
