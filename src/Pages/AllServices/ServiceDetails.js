import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link, useLoaderData } from "react-router-dom";
import { Rating, Spinner } from "flowbite-react";
import AllReviews from "../ReviewContainer/AllReviews";
import { AuthContext } from "../../contexts/AuthProvider";
import { useEffect } from "react";

const ServiceDetails = () => {
  const { user, loading } = useContext(AuthContext);
  const [bought, setBought] = useState(false);

  const service = useLoaderData();
  const { _id, title, price, details, image_url, rating, total_view } = service;

  useEffect(() => {
    fetch(`https://resturant-site-server.vercel.app/order/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) setBought(true);
      });
  }, [_id]);

  if (loading) {
    return (
      <div className="text-center mt-12">
        <Spinner aria-label="Extra large  Center-aligned spinner example" />
      </div>
    );
  }

  const fullStar = Math.ceil(parseInt(rating));
  let starArray = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="hero min-h-screen bg-slate-700 text-slate-200">
        <div className="hero-content flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:mr-5">
            <PhotoProvider>
              <PhotoView src={image_url}>
                <img
                  src={image_url}
                  alt=""
                  className="w-full object-cover cursor-zoom-in rounded-lg"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>

            <Rating className="mt-2">
              {starArray.map((star) => {
                if (star <= fullStar) {
                  return <Rating.Star key={star} />;
                } else {
                  return <Rating.Star filled={false} key={star} />;
                }
              })}
              <span className="ml-2 text-sm">
                {"("}
                {rating} out of 5{")"}
              </span>
              <span className="flex items-center gap-2 ml-8">
                <FaEye className="text-yellow-400"></FaEye>
                {total_view}
              </span>
            </Rating>
            <p className="py-6 md:w-2/3 ">{details}</p>
            <h1 className="text-4xl font-semibold text-red-600">${price}</h1>
            {bought && (
              <button className="mt-8 bg-slate-600 py-3  rounded-full text-xl px-12 cursor-not-allowed">
                Already Purchased
              </button>
            )}
            {!bought && (
              <div className="dropdown dropdown-bottom rounded-none ">
                <label
                  tabIndex={0}
                  className="mt-8 btn btn-warning rounded-full text-xl px-12 cursor-pointer"
                >
                  Order Now
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 mt-1 space-y-3 shadow text-slate-200 w-44 rounded-md bg-slate-800"
                >
                  <Link
                    to={`/bkash/${_id}`}
                    className="bg-slate-700 px-3 py-1 rounded-2xl"
                  >
                    <li>BKash</li>
                  </Link>
                  <Link
                    to={`/stripe/${_id}`}
                    className="bg-slate-700 px-3 py-1 rounded-2xl"
                  >
                    <li>Stripe</li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <AllReviews></AllReviews>
      <p className="mt-5 text-xl bg-slate-500 text-slate-200 text-center py-3 ">
        {" "}
        <span className=" bg-slate-700 hover:bg-slate-800 px-5 hover:px-5  rounded-full py-2">
          {user?.uid ? (
            <Link to={`/addReview/${_id}`}>Leave some feedback</Link>
          ) : (
            <Link to={`/addReview/${_id}`}>
              Please, Login to provide feedback
            </Link>
          )}
        </span>
      </p>
    </div>
  );
};

export default ServiceDetails;
