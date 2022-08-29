import React from "react";
import { multiply } from "../../Utilities/Calculate";
import { deleteShoppingCart } from "../../Utilities/fakedb";
import "./Shoes.css";
const Shoes = (id) => {
  const first = 54;
  const second = 33;
  const result = multiply(first, second);
  const fullCart = (id) => {
    // console.log("removing", id);
    deleteShoppingCart(id);
  };
  return (
    <div>
      <button className="shopping-cart" onClick={() => fullCart(id)}>
        DeleteCart{" "}
      </button>
      <h2>Welcome to my Shoe Store</h2>
      <h3>Result : {result} </h3>
    </div>
  );
};

export default Shoes;
