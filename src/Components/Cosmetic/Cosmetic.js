import React from "react";
import {
  addToCart,
  deleteShoppingCart,
  removeToCart,
} from "../../Utilities/fakedb";

import "./Cosmetic.css";

const Cosmetic = (props) => {
  const { id, name, price } = props.cosmetic;
  const addCart = (id) => {
    console.log(id);
    // localStorage.setItem(id, 1);
    addToCart(id);
  };
  const removeCart = (id) => {
    // console.log("removing", id);
    removeToCart(id);
  };

  return (
    <div className="product">
      <h3>Product Name :{name} </h3>
      <h4>Price : ${price} </h4>
      <h5>Its Id is : {id}</h5>
      <button onClick={() => addCart(id)}>Buy Now </button>
      <button onClick={() => removeCart(id)}>Delete </button>
    </div>
  );
};

export default Cosmetic;
