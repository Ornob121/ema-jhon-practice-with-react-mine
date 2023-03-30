const addToDb = (id) => {
  let shoppingCart = getShoppingCart();

  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getShoppingCart = () => {
  let shoppingCart = {};

  const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (storedCart) {
    shoppingCart = storedCart;
  }
  return shoppingCart;
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

export { addToDb, removeFromDb, getShoppingCart };
