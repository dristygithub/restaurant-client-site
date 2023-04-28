import { Spinner } from "flowbite-react";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import bkashLogo from "../../images/bkash_payment_logo.png";

const BKash = () => {
  useTitle("BKash Payment");
  const { user, loading } = useContext(AuthContext);
  const [service, setService] = useState([]);
  const navigate = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    fetch(`https://resturant-site-server.vercel.app/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [id, loading]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (loading || service.length === 0) {
    return (
      <div className="text-center mt-12">
        <Spinner aria-label="Extra large  Center-aligned spinner example" />
      </div>
    );
  }

  const handleBkash = (data) => {
    console.log(data);
    data["product_id"] = service._id;
    data["price"] = service.price;
    data["email"] = user?.email;
    data["buyer"] = user?.displayName;
    data["title"] = service.title;

    fetch("https://resturant-site-server.vercel.app/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Order added successfully!");
          navigate(`/services/${service._id}`);
        } else toast.error("Failed to add service. Try again!");
      });
  };
  return (
    <div className="mt-8 w-2/3 mx-auto  p-8 space-y-3  bg-slate-300   text-gray-100 rounded-md">
      <h1 className="text-2xl font-bold text-center">
        <img src={bkashLogo} alt="" className="mix-blend-multiply" />
      </h1>
      <form
        onSubmit={handleSubmit(handleBkash)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            Service Name
          </label>
          <input
            defaultValue={`${service?.title}`}
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400 cursor-not-allowed"
            disabled
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            Buyer
          </label>
          <input
            defaultValue={`${user?.displayName}`}
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400 cursor-not-allowed"
            disabled
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            Email address
          </label>
          <input
            defaultValue={`${user?.email}`}
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400 cursor-not-allowed"
            disabled
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            Transaction ID
          </label>
          <input
            type="number"
            {...register("transaction_id", {
              required: "Service name is required",
            })}
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400"
          />
          {errors.transaction_id && (
            <p className="text-red-500">{errors.transaction_id.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            Country
          </label>
          <input
            type="text"
            {...register("country", {
              required: "country is required",
            })}
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400"
          />
          {errors.country && (
            <p className="text-red-500">{errors.country.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            District
          </label>
          <input
            type="text"
            {...register("district", {
              required: "district is required",
            })}
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400"
          />
          {errors.district && (
            <p className="text-red-500">{errors.district.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-800 text-lg">
            Post Code
          </label>
          <input
            type="number"
            {...register("post_code", {
              required: "post_code is required",
            })}
            className="w-full px-4 py-3    border-gray-700   bg-slate-500   text-gray-100 focus:border-violet-400"
          />
          {errors.post_code && (
            <p className="text-red-500">{errors.post_code.message}</p>
          )}
        </div>

        <button className="block w-full rounded-full font-bold p-3 text-2xl text-center  text-gray-200   bg-pink-700 hover:bg-pink-600">
          Payment Done!
        </button>
      </form>
    </div>
  );
};

export default BKash;
