import React from "react";

const InvestItem = ({ item }) => {
  const { title, desc, icon, upOrDown, percent, price } = item;
  return (
    <div className="w-full p-2 items-center justify-between flex">
      {/* icon text */}
      <div className="flex items-center justify-center space-x-4 w-full">
        <div className="bg-[#DBEEF4] rounded-full p-2">
          <span>{icon}</span>
        </div>
        <div className="w-full space-y-1">
            <h1 className="font-bold">{title}</h1>
            <p className="text-sm">{desc}</p>
        </div>
      </div>
      {/* price text */}

      <div className="w-full items-end justify-end flex flex-col">
        <h1>${price}</h1>
        <h1 className={`${upOrDown === "up" ? "text-green-400" : "text-blue-500"}`}>{percent}</h1>
      </div>
    </div>
  );
};

export default InvestItem;
