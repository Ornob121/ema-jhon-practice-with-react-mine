import React from "react";
import "./Product.css";

const Product = (props) => {
  const { name, price, ratings, img, seller } = props.product;
  const handleAddToCart = props.handleAddToCart;
  return (
    <div className="product">
      <img src={img} alt="" />
      <h6>{name}</h6>
      <div>
        <p>Price: ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating: {ratings} Stars</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn-add-to-cart"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
