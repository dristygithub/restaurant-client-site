import React from "react";
import { toast } from "react-hot-toast";
import offer1 from "../../../images/o1.jpg";
import offer2 from "../../../images/o2.jpg";

const Offers = () => {

  const showOffer = () => {
    toast.error(`Sorry! Offer isn't available right now!`);
  }
  return (
    <>
      <h2 className="text-2xl sm:text-3xl md:text-5xl text-center merri-text text-slate-200 dark:text-slate-800 mb-5 mt-32">
        🌮 My Special Offers 🍲
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-11/12 mx-auto text-slate-100">
        <div className="flex-col sm:flex-row card card-side bg-slate-700 shadow-xl rounded-none">
          <figure className="md:w-1/3 md:ml-3 w-2/3 mx-auto">
            <img
              className="w-full rounded-full border-2 border-yellow-400"
              src={offer1}
              alt="offer 1"
            />
          </figure>
          <div className="card-body md:w-2/3 w-full">
            <h2 className="card-title">Yummy Burger Day!</h2>
            <p className="mt-4">
              Burgers are absolutely amazing. Now, it may be a lot easier to
              take a chance to taste it! Take a look with our burger offer
            </p>
            <h1 className="text-2xl">
              <span className="text-7xl text-yellow-300  merri-text">20%</span>{" "}
              off
            </h1>
            <div className="card-actions">
              <button
                className="btn btn-outline btn-warning rounded-none"
                onClick={showOffer}
              >
                Check the offer
              </button>
            </div>
          </div>
        </div>
        <div className="flex-col sm:flex-row card card-side bg-slate-700 shadow-xl rounded-none">
          <figure className="md:w-1/3 md:ml-3 w-2/3 mx-auto">
            <img
              className="w-full rounded-full border-2 border-yellow-400"
              src={offer2}
              alt="offer 1"
            />
          </figure>
          <div className="card-body md:w-2/3 w-full">
            <h2 className="card-title">Weekly Pizzas Day!</h2>
            <p className="mt-4">
              Pizzas are absolutely amazing. Now, it may be a lot easier to take
              a chance to taste it! Take a look with our pizza offer
            </p>
            <h1 className="text-2xl">
              <span className="text-7xl text-yellow-300  merri-text">15%</span>{" "}
              off
            </h1>
            <div className="card-actions">
              <button
                className="btn btn-outline btn-warning rounded-none"
                onClick={showOffer}
              >
                Check the offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;
