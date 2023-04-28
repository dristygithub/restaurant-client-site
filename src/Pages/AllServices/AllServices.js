import { Spinner } from "flowbite-react";
import React, { useContext } from "react";
import { FaBahai } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Service from "./Service";

const AllServices = () => {
  useTitle('All Services');
  const services = useLoaderData();
  const {loading} = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center mt-12">
        <Spinner aria-label="Extra large  Center-aligned spinner example" />
      </div>
    );
  }
  return (
    <div className="mt-16">
      <h2 className=" flex justify-center items-center gap-3 mt-3 text-2xl md:text-4xl  font-bold text-slate-200 dark:text-slate-800 merri-text">
        <span className="spin-animation">
          <FaBahai />
        </span>
        <span>Tommy's Best Food Dishes</span>
        <span className="spin-animation">
          <FaBahai />
        </span>
      </h2>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-11/12 mx-auto gap-8 mt-8">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
