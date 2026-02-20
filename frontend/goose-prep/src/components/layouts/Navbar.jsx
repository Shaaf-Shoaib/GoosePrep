import React from "react";
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between gap-5">
        <Link to="/dashboard" className="flex items-center gap-3">
          <img
            src="/Logo.png"
            alt="GoosePrep Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
          />

          <h2 className="text-xl md:text-2xl font-bold text-black">
            GoosePrep
          </h2>
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
  );
};

export default Navbar;
