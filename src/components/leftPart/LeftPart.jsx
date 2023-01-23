import React from "react";
import { InvestDB } from "./utils/InvestmentsDB";
import InvestItem from "./InvestItem";

const LeftPart = () => {
  return (
    <div className="col-span-2 min-h-[90vh] border-r border-gray-400 items-start justify-start flex flex-col">
      {/* top section */}
      <div className="w-full items-start flex flex-col px-12 pt-12 pb-6">
        <h1 className="font-bold text-xl xl:text-2xl pb-2">My Card</h1>
        <p className="text-md text-gray-800">
          Find all your investment information in this card
        </p>
        <div className="items-start justify-start flex flex-col px-6 pt-8 pb-4 bg-[#89F8B7] mt-6 w-full  ">
          <h1 className="">Brian Musili</h1>
          <h1 className="text-3xl xl:text-5xl font-bold py-6">$ 344,122.00</h1>
        </div>
        <div className="bg-black py-4 px-8 w-full items-start justify-between flex shadow-xl shadow-emerald-300">
          <span className="flex flex-col items-start justify-start text-white">
            <h1>Card number</h1>
            <h1>+2547*******</h1>
          </span>
          <span className="flex flex-col items-start justify-start text-white">
            <h1>CVC</h1>
            <h1>786</h1>
          </span>
        </div>
      </div>
      {/* bottom section */}

      <div className="w-full items-start justify-start flex flex-col px-12 py-6">
        <h1 className="font-bold text-xl xl:text-2xl pb-2">
          Recent Investment
        </h1>
        <div className="w-full space-y-5 overflow-y-auto max-h-[350px] py-6 scrollbar-hide ">
          {InvestDB.map((item) => (
            <InvestItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftPart;
