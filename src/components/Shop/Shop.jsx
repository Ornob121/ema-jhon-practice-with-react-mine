import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../../public/utilities/utilities";
import Product from "../Product/Product";
import Cart from "./Cart";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //! Step 0: Using useEffect because the localStorage is not inside the code it is outside and i am interacting data from localStorage;

  useEffect(() => {
    const storedCart = getShoppingCart();

    const savedCart = [];

    // ! Step 1 : Loop stored cart to get the localStorage id ;
    for (const id in storedCart) {
      // ! Step 2: set the products as dependency because when the products are loaded this whole steps is going to repeat again and find the product in localStorage ;

      const savedProduct = products.find((product) => product.id === id);
      console.log(savedProduct);

      if (savedProduct) {
        // ! Step 3: get the quantity of the localStorage ;

        const localStorageQuantity = storedCart[id];

        // ! Step 4: set the quantity of savedProduct as localStorage quantity ;

        savedProduct.quantity = localStorageQuantity;

        // ! Step 5: push the product into a new array as many times as localStorageQuantity because it will push same amount in the cart otherwise its amount will be 1 ;

        for (let i = 0; i < localStorageQuantity; i++) {
          savedCart.push(savedProduct);
        }
      }
    }

    // ! Step 6: Set the cart value ;
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };
  return (
    <div className="main-section">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-section">
        <Cart cart={cart} key={cart.id}></Cart>
      </div>
    </div>
  );
};

export default Shop;
