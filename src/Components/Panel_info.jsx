import React, { useEffect, useState } from "react";

function Panel_info() {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedDateTime = now.toLocaleString("en-NG", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZoneName: "short", // 🌍 auto timezone
      });

      setCurrentDateTime(formattedDateTime);
    };

    updateTime(); // initial render
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center text-orange-600 m-5">
      <h3 className="font-bold text-2xl">Admin Dashboard</h3>

      {/* Smooth update without fade-out */}
      <p className="transition-all duration-300">
        {currentDateTime}
      </p>
    </div>
  );
}

export default Panel_info;
