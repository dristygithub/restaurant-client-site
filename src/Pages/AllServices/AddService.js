import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
  useTitle("Add Service");
  const navigate = useNavigate();
  const imageHostKey = process.env.REACT_APP_imgbb_key2;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitService = (data) => {
    const { title, details, rating, image_url, price } = data;
    if (rating > 5) {
      toast.error("rating must be less then 6");
      return;
    }
    if (details.length > 200) {
      toast.error(
        `Description length:${details.length}. It should be maximum 200 characters`
      );
      return;
    }
    const photo = data.image_url[0];
    console.log(photo);
    const service = { title, details, rating, image_url, price };
    const formData = new FormData();
    formData.append("image", photo);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          service.image_url = data.data.url;
          fetch("https://resturant-site-server.vercel.app/addService", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(service),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Service added successfully!");
                navigate(`/services`);
              }
              toast.error("Failed to add service. Try again!");
            });
        }
      });
  };
  return (
    <div className="mt-8 w-5/6 mx-auto max-w-md p-8 space-y-3   bg-slate-700   text-gray-100">
      <h1 className="text-2xl font-bold text-center">
        👓 Let's add some services 👓
      </h1>
      <form
        onSubmit={handleSubmit(handleSubmitService)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="service" className="block   text-gray-400">
            Service name
          </label>
          <input
            type="text"
            {...register("title", {
              required: "Service name is required",
            })}
            placeholder="service name"
            className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
            required
          />
          {errors.title && (
            <p className="text-red-500">{errors.service.message}</p>
          )}
        </div>

        <div className="form-control space-y-1 w-full">
          <label className="block text-sm  text-gray-400">
            Upload Product photo
          </label>
          <input
            type="file"
            {...register("image_url", {
              required: "Photo is Required",
            })}
            accept="image/*"
            className="input input-bordered w-full rounded-none   border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
          />
          {errors.image_url && (
            <p className="text-red-500">{errors.image_url.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="details" className="block   text-gray-400">
            Description with maximum 150characters
          </label>
          <textarea
            type="text"
            {...register("details", {
              required: "product description is required",
            })}
            placeholder="Description"
            className="w-full px-4 py-3  min-h-[200px]   border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
            required
          />
          {errors.details && (
            <p className="text-red-500">{errors.details.message}</p>
          )}
        </div>
        <div className="flex justify-between gap-5">
          <div className="space-y-1 text-sm relative">
            <label htmlFor="price" className="block   text-gray-400">
              Service Price
            </label>
            <input
              type="number"
              {...register("price", {
                required: "Don't forget to add the price!",
              })}
              placeholder="price"
              className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
              required
            />
            {errors.price && (
              <p className="text-red-500">{errors.price.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="rating" className="block   text-gray-400">
              Rating
            </label>
            <input
              type="number"
              {...register("rating", {
                required: "Provide the rating",
              })}
              placeholder="rating"
              className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
              required
            />
            {errors.rating && (
              <p className="text-red-500">{errors.rating.message}</p>
            )}
          </div>
          <div className="space-y-1 text-sm relative">
            <label htmlFor="view" className="block   text-gray-400">
              Total view
            </label>
            <input
              type="number"
              placeholder="578"
              value="578"
              className="w-full px-4 py-3    border-gray-700   bg-gray-900   text-gray-100 focus:border-violet-400"
              disabled
            />
          </div>
        </div>

        <button className="block w-full font-semibold p-3 text-center  text-gray-900   bg-blue-300 hover:bg-blue-400">
          Add The Service
        </button>
      </form>
    </div>
  );
};

export default AddService;
