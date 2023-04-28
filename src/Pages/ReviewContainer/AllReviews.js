import { Spinner } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaBahai } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../contexts/AuthProvider";
import Review from "./Review";

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();
  const { loading, logOut } = useContext(AuthContext);
  useEffect(() => {
    if (!loading) {
      fetch(`https://resturant-site-server.vercel.app/allReviews`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("resturant-token")}`,
        },
      })
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
  }, [logOut, loading, navigate]);

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
      confirmButtonText: "Save",
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
          <h2 className=" flex justify-center items-center gap-3 mt-16 text-2xl md:text-4xl  font-bold text-slate-200 dark:text-slate-800 merri-text">
            <span className="spin-animation relative -z-10">
              <FaBahai />
            </span>
            <span>Customers Feedback</span>
            <span className="spin-animation">
              <FaBahai />
            </span>
          </h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:w-11/12 mx-auto gap-8 mt-8">
            {reviews?.map((review) => (
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
        </div>
      )}
    </>
  );
};

export default AllReviews;
