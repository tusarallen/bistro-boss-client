import React from "react";

const FoodCard = ({ item }) => {
  const { image, price, name, recipe } = item;

  return (
    <div className="card w-96 bg-base-100 shadow-xl text-center mb-5">
      <figure>
        <img src={image} alt="Food" />
      </figure>
      <p className="bg-slate-900 text-white right-0 absolute p-2 rounded-md font-bold mr-4 mt-2">${price}</p>
      <div className="card-body">
        <h2 className="text-2xl font-bold text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary md:mr-24 mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
