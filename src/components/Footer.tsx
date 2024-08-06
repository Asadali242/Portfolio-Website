import React from "react";
import Tile from "./Tile";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative px-4 py-6">
      <div className="absolute inset-0 w-full h-full grid grid-cols-11 lg:grid-cols-20 overflow-hidden z-0  bg-black dark:bg-lime-400">
        {Array.from({ length: 20 * 6 }).map((_, index) => (
          <Tile key={index} />
        ))}
      </div>
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row text-center items-center ">
        <p className="text-sm text-neutral-50 dark:text-neutral-900">
          &copy; {currentYear} Asad Mehboob Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
