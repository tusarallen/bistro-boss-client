import React from "react";

const ItemMenu = ({ item }) => {
  const { image, price, name, recipe } = item;

  return (
    <div className="flex space-x-4 mb-12">
      <img
        className="w-[100px]"
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}-----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default ItemMenu;
