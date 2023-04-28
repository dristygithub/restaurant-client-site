import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";

const AddReview = () => {
  useTitle("Add Review");
  const [message, setMessage] = useState("");
  const { user } = useContext(AuthContext);

  const service = useLoaderData();
  const { _id, title, price, image_url } = service;
  const review = {};
  const navigate = useNavigate();

  const handleSubmitReview = () => {
    if (message.trim() === "") {
      toast.error("Please, Leave some feedback!");
      return;
    }
    const date = new Date();
    review["message"] = message;
    review["rating"] = "5";
    review["username"] = user.displayName;
    review["user_photo"] = user.photoURL;
    review["email"] = user.email;
    review["date"] = date.toDateString();
    review["time"] = date.toLocaleTimeString();
    review["total_time"] = date.getTime();
    review["title"] = title;
    review["price"] = price;
    review["service_photo"] = image_url;

    fetch("https://resturant-site-server.vercel.app/addReview", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Review added successfully!");
        navigate(`/services/${_id}`);
      });
  };

  return (
    <div className="sm:w-11/12 mx-auto mt-16 text-center bg-slate-800 text-slate-200">
      <div className=" mx-auto flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12  ">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Your opinion matters!
          </h2>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center merri-text">
              🤷‍♂️ How was your experience?
            </span>
          </div>
          <div className="flex flex-col w-full">
            <textarea
              onBlur={(event) => {
                setMessage(event.target.value);
              }}
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md bg-slate-700 resize-none text-xl text-slate-200"
              spellCheck="false"
            ></textarea>
            <div className="rating flex justify-center gap-2 mt-2">
              <p className="mr-5 font-semibold">Rate the service: </p>
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <button
              type="button"
              onClick={handleSubmitReview}
              className="py-4 my-8 font-semibold rounded-md btn btn-outline btn-info w-1/2 mx-auto"
            >
              Leave feedback
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link to={`/services/${_id}`} className="text-sm ">
            <button className="btn btn-link">Maybe later</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
