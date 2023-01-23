import React from "react";
import {
  BellIcon,
  CpuChipIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="bg-[#F0F5f5] w-full py-6 items-center justify-between flex px-12">
      {/* search */}

      <div className="w-full lg:flex hidden space-x-4 items-center justify-start py-2">
        <MagnifyingGlassIcon className="h-4 w-4" />
        {/* icon */}
        <input
          type="text"
          placeholder="search anything...."
          className="bg-transparent outline-none"
        />
      </div>
      {/* logo */}

      <div className="items-center w-full justify-center flex space-x-4">
        <CpuChipIcon className="w-6 h-6" />
        <h2 className="text-xl text-gray-900 font-medium">DevSite</h2>
      </div>

      {/* icons */}

      <div className="items-center justify-end space-x-6 flex w-full">
        <BellIcon className="header-icons" />
        <InboxIcon className="header-icons" />
        <UserCircleIcon className="header-icons" />
      </div>
    </div>
  );
};

export default Header;
