import React from "react";
import arrow from "/arrow.png"

function Student_list_view() {
  return (
    <div className="flex justify-between p-5 items-center mb-3">
      <h2 className=" font-extrabold text-lg text-[#D64700]">Student list</h2>
      <div className="flex items-center gap-2">
        <img src={arrow}  />
        <h2>View</h2>
      </div>
    </div>
  );
}

export default Student_list_view;
