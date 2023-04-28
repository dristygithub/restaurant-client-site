import React, { useEffect, useState } from "react";
import { FaBahai } from "react-icons/fa";
import { Link } from "react-router-dom";
import Service from "../../AllServices/Service";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://resturant-site-server.vercel.app/homeServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h2 className=" flex justify-center items-center gap-3 mt-24 text-2xl md:text-4xl  font-bold text-slate-200 dark:text-slate-800 merri-text">
        <span className="spin-animation">
          <FaBahai />
        </span>
        <span>Weekly Top3 Dishes</span>
        <span className="spin-animation">
          <FaBahai />
        </span>
      </h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-11/12 mx-auto gap-8 mt-8">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
      <Link to="/services" className=" flex justify-center mt-12">
        <button className="btn btn-warning  rounded-none text-xl px-12">
          View All
        </button>
      </Link>
    </div>
  );
};

export default HomeServices;
