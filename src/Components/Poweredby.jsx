import React from "react";
import ekiti_logo from "/ekiti_logo.png";
import wakocode_logo from "/wakocode.png";

function Poweredby() {
  return (
    <div className="flex justify-center items-center">
      <h2 className="font-extrabold text-4xl">Powered By</h2>

      <div className="flex justify-center items-center gap-2 ml-4">
        <img src={ekiti_logo} alt="Ekiti Logo"  className="w-20 shadow-md rounded-md"/>
        <img src={wakocode_logo} alt="Wakocode Logo" className="w-40 h-20" />
      </div>
      
    </div>
  );
}

export default Poweredby;
