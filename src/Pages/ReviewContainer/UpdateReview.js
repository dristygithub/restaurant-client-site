import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

const UpdateReview = () => {
  const review = useLoaderData();
  const { _id, message, username } = review;
  const [msg, setMsg] = useState(message);
  const navigate = useNavigate();

  const updateReview = () => {
    if (message.trim() === "") {
      toast.error("Don't remain message empty!");
      return;
    }
    review.message = msg;
    fetch(`https://resturant-site-server.vercel.app/allReviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("review updated successfully!");
        navigate("/myReviews");
      });
  };
  return (
    <div className="sm:w-11/12 mx-auto mt-16 text-center bg-slate-800 text-slate-200">
      <div className=" mx-auto flex flex-col max-w-xl p-8 shadow-sm rounded-xl lg:p-12  ">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-3xl font-semibold text-center">
            Update the review
          </h2>
          <h1>
            <span className="text-slate-200">Reviewer:</span>
            <p className="text-yellow-400 font-semibold">[ {username} ]</p>
          </h1>
          <div className="flex flex-col items-center py-6 space-y-3">
            <span className="text-center merri-text">
              🤷‍♂️ How was your experience?
            </span>
          </div>
          <div className="flex flex-col w-full">
            <textarea
              onBlur={(event) => {
                setMsg(event.target.value);
              }}
              rows="3"
              placeholder="Message..."
              className="p-4 rounded-md bg-slate-700 resize-none text-xl text-slate-200"
              spellCheck="false"
              defaultValue={message}
            ></textarea>

            <button
              type="button"
              onClick={updateReview}
              className="py-4 my-8 font-semibold rounded-md btn btn-outline btn-info w-1/2 mx-auto"
            >
              Update feedback
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

export default UpdateReview;
