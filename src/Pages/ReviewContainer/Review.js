import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Review = ({ review, deleteReview }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Loading...</div>;
  }
  const {
    _id,
    title,
    message,
    username,
    user_photo,
    service_photo,
    date,
    time,
    email,
  } = review;
  
  return (
    <div>
      <div className="min-h-16 container flex flex-col w-full max-w-lg p-3 mx-auto divide-y rounded-md divide-gray-700 bg-slate-800 text-gray-200">
        <div className="flex justify-between items-start p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={user_photo}
                alt=""
                className="object-cover w-12 h-12 rounded-full bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">
                {username}
                {user?.email === email && <span> (You) </span>}
              </h4>
              <span className="text-xs text-gray-400 mr-2">{date} </span>
              <span className="text-xs text-gray-400">{time} </span>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div>
              <img
                src={service_photo}
                alt=""
                className="object-cover w-12 h-12 rounded-none border border-slate-400 bg-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row p-4  space-2 gap-5  text-sm text-gray-300">
          <div className="w-1/2 h-40 border">
            <img
              src={service_photo}
              alt=""
              className="object-cover w-full h-full border border-slate-400 p-1 rounded-none bg-gray-500"
            />
          </div>
          <div className="w-1/2 flex flex-col divide-y divide-y-1 divide-yellow-500">
            <h2 className="text-xl font-semibold mb-2 text-yellow-500">
              {title}
            </h2>

            <div >
              <p className="text-lg merri-text ">{message}</p>
              {user?.email === email && (
                <span className="flex flex-row gap-2 mt-7">
                  <button
                    onClick={()=> deleteReview(_id)}
                    className="bg-red-700 text-slate-200 px-5 py-1 rounded-sm font-semibold"
                  >
                    Delete
                  </button>
                  <Link to={`/updateReview/${_id}`}><button className="bg-cyan-600 text-slate-200 px-5 py-1 rounded-sm font-semibold">
                    Edit
                  </button></Link>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
