//use local storage to manage cart data
const addToCart = (id) => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storeCart = localStorage.getItem("shopping-cart");
  if (storeCart) {
    shoppingCart = JSON.parse(storeCart);
  }

  //add quantity
  const quntity = shoppingCart[id];
  if (quntity) {
    console.log("Already exist");
    const newQuntity = parseInt(quntity) + 1;
    shoppingCart[id] = newQuntity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

//remove item from local storage

const removeToCart = (id) => {
  const storeCart = localStorage.getItem("shopping-cart");
  if (storeCart) {
    const shoppingCart = JSON.parse(storeCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};
const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};
export { addToCart, removeToCart, deleteShoppingCart };

//normal way to storage

/* const addToCart = (id) => {
  const quantity = localStorage.getItem(id);
  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    localStorage.setItem(id, newQuantity);
  } else {
    localStorage.setItem(id, 1);
  }
};
export { addToCart }; */
