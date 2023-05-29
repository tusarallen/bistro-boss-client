import React from "react";
import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <div className="uppercase">
        <div className="text-2xl">Total Items: {cart.length}</div>
        <div className="text-2xl">
          Total Price: {parseFloat(total).toFixed(2)}
        </div>
        <button className="btn btn-warning btn-sm">PAY</button>
      </div>
    </div>
  );
};

export default MyCart;
