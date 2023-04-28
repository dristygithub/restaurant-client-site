import React from "react";
import { FaShippingFast, FaPhoneVolume, FaSync } from "react-icons/fa";

const WorkProcess = () => {
  return (
    <>
      <h2 className="text-slate-200 dark:text-slate-800  mt-32 flex justify-center items-center gap-3 sm:text-3xl md:text-5xl text-xl  font-bold ">
        <span className="spin-animation">🎯</span>
        <span>Your Expectation, My Commitment</span>
        <span className="spin-animation">🎯</span>
      </h2>
      <div className="w-11/12 w- mx-auto bg-slate-700 text-slate-100 grid md:grid-cols-3 grid-cols-1  mt-8 py-16">
        <div className="flex gap-2 items-center bg-slate-700 justify-center">
          <h2 className="text-5xl text-yellow-300 rounded-full border-dotted border-2 border-yellow-400 p-3 ">
            <FaShippingFast />
          </h2>
          <div className="flex flex-col">
            <h3 className="font-semibold text-2xl text-slate-200">
              Free Shipping
            </h3>
            <p className="text-slate-300">
              When order over{" "}
              <span className="text-yellow-400 font-bold text-xl">$75</span>
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center bg-slate-700 justify-center">
          <h2 className="text-5xl text-yellow-300 rounded-full border-dotted border-2 border-yellow-400 p-3 ">
            <FaPhoneVolume />
          </h2>
          <div className="flex flex-col">
            <h3 className="font-semibold text-2xl text-slate-200">
              24/7 Support
            </h3>
            <p className="text-slate-300">Get support all the day</p>
          </div>
        </div>
        <div className="flex gap-2 items-center bg-slate-700 justify-center">
          <h2 className="text-5xl text-yellow-300 rounded-full border-dotted border-2 border-yellow-400 p-3 ">
            <FaSync />
          </h2>
          <div className="flex flex-col">
            <h3 className="font-semibold text-2xl text-slate-200">Refund</h3>
            <p className="text-slate-300">
              Get refund within
              <span className="text-yellow-400 font-bold text-xl"> 3</span>days!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkProcess;
