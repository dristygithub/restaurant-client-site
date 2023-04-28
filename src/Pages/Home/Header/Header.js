import { Carousel } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="banner-container h-1  text-slate-100">
      <Carousel>
        <div className="ml-4 sm:ml-20 space-y-5">
          <h1 className="text-xl md:text-4xl md:w-5/6 w-2/3 font-bold">
            To live a full life, you have to fill your stomach first.
          </h1>
          <p className="w-2/3 md:w-1/3">
            If you want to fight back with the 'Hungry' giant, you've to fill up
            your stomach. Because, Empty Stomach never let you win against the
            giant.
          </p>
          <Link to="/services">
            <button className="mt-5 btn btn-outline btn-warning rounded-none">
              Let's Get Started
            </button>
          </Link>
        </div>
        <div className="ml-4 sm:ml-20 space-y-5">
          <h1 className="text-xl md:text-4xl md:w-5/6 w-2/3 font-bold">
            First, we eat. Then, we do everything else
          </h1>
          <p className="w-2/3 md:w-1/3">
            If you want to fight back with the 'Hungry' giant, you've to fill up
            your stomach. Because, Empty Stomach never let you win against the
            giant.
          </p>
          <Link to="/services">
            <button className="mt-5 btn btn-outline btn-warning rounded-none">
              Let's Get Started
            </button>
          </Link>
        </div>
        <div className="ml-4 sm:ml-20 space-y-5">
          <h1 className="text-xl md:text-4xl md:w-5/6 w-2/3 font-bold">
            Good food never fail in bringing people together
          </h1>
          <p className="w-2/3 md:w-1/3">
            If you want to fight back with the 'Hungry' giant, you've to fill up
            your stomach. Because, Empty Stomach never let you win against the
            giant.
          </p>
          <Link to="/services">
            <button className="mt-5 btn btn-outline btn-warning rounded-none">
              Let's Get Started
            </button>
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default Header;
