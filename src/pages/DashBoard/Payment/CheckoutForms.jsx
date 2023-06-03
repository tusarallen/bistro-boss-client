import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckoutForms = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      console.log("[paymentMethod]", paymentMethod);
      setCardError("");
    }
  };

  return (
    <>
      <form className="w-2/3 m-5" onSubmit={handleSubmit}>
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
          className="btn btn-primary font-bold mt-12 rounded-md flex mx-auto"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-[red] ml-12my mt-5 font-bold">{cardError}</p>
      )}
    </>
  );
};

export default CheckoutForms;
