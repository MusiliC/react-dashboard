import React, { useState } from "react";
import { navLinks } from "./utils/NavDb.js";
import { useRecoilState } from "recoil";
import { ActiveTab } from "../../atoms/ActiveTab.js";

const Navbar = () => {
  return (
    <nav className="col-span-2 border-r border-gray-200 min-h-[90vh]  w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8 w-full">
        {navLinks.slice(0, 4).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}

        <div className="w-full border-t border-gray-200" />

        {navLinks.slice(4, 6).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
      </div>

      <div className="xl:flex hidden flex-col items-center justify-center space-y-4 p-4">
        <h1 className="text-lg w-full font-semibold">
          Grow your <br /> Saving Now!
        </h1>
        <p>Pick an investment strategy that represents your goals</p>
        <button className="w-full py-2 px-3 bg-black text-white">
          Become a pro
        </button>
      </div>
    </nav>
  );
};

function NavItem({ link }) {
  const [activeNav, setActiveNav] = useRecoilState(ActiveTab);

  return (
    <div
      onClick={() => setActiveNav(link.id)}
      key={link.id}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-gray-900 border-l-4 border-transparent ${
        activeNav === link.id && "border-gray-900"
      }`}
    >
      <span>{link.icon}</span>
      <h1
        className={`text-gray-600 group-hover:text-black xl:flex hidden  ${
          activeNav === link.id && "text-black"
        }`}
      >
        {link.title}
      </h1>
    </div>
  );
}

export default Navbar;
