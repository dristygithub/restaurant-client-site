import { Spinner } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaBahai } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import Review from "./Review";

const MyReviews = () => {
  useTitle("My Reviews");
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const { user, loading, logOut } = useContext(AuthContext);

  useEffect(() => {
    if (!loading) {
      fetch(
        `https://resturant-site-server.vercel.app/allReviews?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("resturant-token")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            logOut();
            navigate("/login");
          }
          return res.json();
        })
        .then((data) => {
          setReviews(data);
        });
    }
  }, [user?.email, loading, logOut, navigate]);
  
  if (loading) {
    return (
      <div className="text-center mt-12">
        <Spinner aria-label="Extra large  Center-aligned spinner example" />
      </div>
    );
  }

  const deleteReview = (_id) => {
    Swal.fire({
      title: "Do you really want to delete the review?",
      showCancelButton: true,
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://resturant-site-server.vercel.app/services/delete/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Review Deleted Successful!");
              const remainingReviews = reviews.filter(
                (review) => review._id !== _id
              );
              setReviews(remainingReviews);
            }
          });
      }
    });
  };

  return (
    <>
      {reviews.length ? (
        <div>
          <h2 className="flex justify-center items-center gap-3 mt-3 text-3xl  font-bold underline text-slate-200 dark:text-slate-800">
            <span className="spin-animation">
              <FaBahai />
            </span>
            <span>Your valuable feedback</span>
            <span className="spin-animation">
              <FaBahai />
            </span>
          </h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-11/12 mx-auto gap-8 mt-8">
            {reviews.map((review) => (
              <Review
                key={review._id}
                deleteReview={deleteReview}
                review={review}
              ></Review>
            ))}
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex flex-col justify-center items-center text-slate-200 dark:text-slate-800">
          <h2 className="md:text-5xl text-center font-bold">
            No reviews were added
          </h2>
          <Link
            to="/services"
            className="mt-8 px-8 py-2 font-semibold rounded bg-violet-400 text-gray-900"
          >
            Back to Services
          </Link>
        </div>
      )}
    </>
  );
};

export default MyReviews;
