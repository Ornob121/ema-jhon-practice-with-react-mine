import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../../public/utilities/utilities";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (totalPrice / 100) * 7;

  console.log(totalPrice);
  return (
    <div className="cart">
      <h5>Order Summary</h5>
      <p>Selected Items:{cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping Charge: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>

      <h6>Grand Total: {totalPrice + totalShipping + tax}</h6>
    </div>
  );
};

export default Cart;
