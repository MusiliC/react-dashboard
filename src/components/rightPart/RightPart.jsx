import React from "react";
import {
  BanknotesIcon,
  CashIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";
import { Chart } from "chart.js";
import { InvestDB } from "./../leftPart/utils/InvestmentsDB";
import PortfolioItem from "./PortfolioItem";

const RightPart = () => {
  return (
    <div className="col-span-3 items-start justify-start flex flex-col w-full pt-12 pb-6 ">
      {/* top section */}
      <div className="md:flex items-center justify-center w-full lg:space-y-0 space-y-4 lg:space-x-4 px-12 ">
        <div className="space-y-6 w-full  items-center justify-center flex flex-col">
          <span className="p-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex">
            <BanknotesIcon className="w-8 h-8 stroke-1" />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2 className="font-bold text-xl">On Time</h2>
            <h2>$ 120.55</h2>
          </span>
        </div>
        <div className="space-y-6 w-full  items-center justify-center flex flex-col">
          <span className="p-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex">
            <CreditCardIcon className="w-8 h-8 stroke-1" />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2 className="font-bold text-xl">Round Ups</h2>
            <h2>$ 100.55</h2>
          </span>
        </div>

        <div className="bg-[#BFFA00] pt-6 items-center justify-between flex flex-col w-full">
          <span className="items-center justify-center flex flex-col w-full py-6">
            <h4>Total Amount</h4>
            <h4 className="text-black font-bold text-xl 2xl:text-3xl">
              $ 560, 000
            </h4>
          </span>
          <div className="bg-black items-center justify-center flex text-white w-full py-3">
            <h1>Withdrawal Earnings</h1>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 w-full my-4" />
      {/* chart */}
      <div className="w-full items-start flex flex-col px-12 py-12">
        <h1 className="text-xl font-bold xl:text-3xl my-2">Potential</h1>
        <img
          src="/chart.png"
          className="h-[320px] md:w-3/4  object-cover"
          alt=""
        />
        {/* <Chart/> */}
      </div>
      {/* bottom section */}
      <div className="w-full items-start justify-start flex flex-col px-12 py-6">
        <h1 className="text-xl font-bold xl:text-3xl py-4 "> My Portfolio </h1>
        <div className="flex items-center justify-center space-x-6 overflow-x-auto w-full py-4 ">
          {InvestDB.map((item) => (
            <PortfolioItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightPart;
