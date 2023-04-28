import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Spinner } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import useTitle from "../../hooks/useTitle";
import StripeCheckout from "./StripeCheckout";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Stripe = () => {
  useTitle("Stripe Payment");
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

  if (loading || service.length === 0) {
    return (
      <div className="text-center mt-12">
        <Spinner aria-label="Extra large  Center-aligned spinner example" />
      </div>
    );
  }

  return (
    <div className="mt-8 p-5 bg-slate-700 w-2/3 mx-auto rounded-lg border border-slate-200 bg-opacity-90">
      <div className="w-2/3 mx-auto flex flex-col items-center">
        <h2 className="text-4xl text-yellow-400 font-bold mb-4">
          Stripe Payment
        </h2>
        <div className="overflow-x-auto sm:w-[320px]">
          <table className="table w-full text-center  text-slate-200">
            <thead>
              <tr>
                <th className="text-lg">Product</th>
                <th className="text-lg">Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{service.title}</td>
              </tr>
              <tr>
                <td>Price</td>
                <td>{service.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-1/2 rounded-md py-8 px-5 mx-auto mt-12 bg-slate-200">
        <Elements stripe={stripePromise}>
          <StripeCheckout service={service}></StripeCheckout>
        </Elements>
      </div>
    </div>
  );
};

export default Stripe;
