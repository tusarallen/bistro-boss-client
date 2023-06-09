import React from "react";
import ItemMenu from "../../Shared/ItemMenu/ItemMenu";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img }) => {
  console.log(title);
  return (
    <div className="my-12">
      {title && <Cover img={img} title={title} />}
      <div className="grid md:grid-cols-2 gap-10 grid-cols-1">
        {items.map((item) => (
          <ItemMenu key={item._id} item={item}></ItemMenu>
        ))}
      </div>
      <div className="flex justify-center items-center">
        {title && (
          <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MenuCategory;
