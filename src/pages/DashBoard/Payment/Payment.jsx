import React from "react";
import TitleSection from "../../../components/TitleSection/TitleSection";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForms from "./CheckoutForms";
import useCart from "../../../hooks/useCart";

// TODO: provide publishedable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total).toFixed(2);

  return (
    <div>
      <TitleSection
        subHeading="Please Provide"
        heading="Payment"
      ></TitleSection>
      <Elements stripe={stripePromise}>
        <CheckoutForms price={price} />
      </Elements>
    </div>
  );
};

export default Payment;
