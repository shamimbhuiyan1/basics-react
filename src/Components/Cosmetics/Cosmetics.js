import React from "react";
import { add } from "../../Utilities/Calculate";
import Cosmetic from "../Cosmetic/Cosmetic";
import "./Cosmetics.css";

const Cosmetics = () => {
  const cosmatics = [
    { id: 1, name: "snow", price: 180 },
    { id: 2, name: "powder", price: 250 },
    { id: 3, name: "facewash", price: 380 },
    { id: 4, name: "perfume", price: 780 },
    { id: 5, name: "teethbrush", price: 120 },
  ];
  let first = 64;
  let second = 33;
  const result = add(first, second);
  return (
    <div>
      <h1>Welcome to my Cosmetic Store</h1>
      <h4>Result: {result} </h4>
      <div className="products">
        {cosmatics.map((cosmetic) => (
          <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
        ))}
      </div>
    </div>
  );
};

export default Cosmetics;
