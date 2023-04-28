import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

// import "../styles/common.css";

const StripeCheckout = ({ service }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const { price } = service;
  const navigate = useNavigate();
  const id = useParams().id;

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("https://resturant-site-server.vercel.app/create-payment-intent", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       authorization: `Bearer ${process.env.REACT_APP_SECRET_KEY}`,
  //     },
  //     body: JSON.stringify({ price }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, [price]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      toast.error("Stripe and element can't be empty");
      return;
    }
    toast.error(
      "Thanks for your interest.\nNot available right now.Coming soon.\n\nChoose BKash Payment system "
    );
    navigate(`/services/${service._id}`);

    // const card = elements.getElement(CardElement);

    // if (card == null) {
    //   return;
    // }

    // const { error, paymentMethod } = await stripe.createPaymentMethod({
    //   type: "card",
    //   card,
    // });

    // if (error) {
    //   console.log("[error]", error);
    //   setCardError(error);
    // } else {
    //   setCardError("");
    //   console.log("[PaymentMethod]", paymentMethod);
    // }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="py-1 mx-auto flex justify-center mt-12 -mb-4 bg-yellow-400 text-slate-200 rounded-full text-xl px-12 cursor-pointer"
        // disabled={!stripe || !clientSecret}
      >
        Payment Done!
      </button>
    </form>
  );
};

export default StripeCheckout;
