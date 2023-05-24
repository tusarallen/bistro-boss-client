import React from "react";
import TitleSection from "../../../components/TitleSection/TitleSection";
import ItemMenu from "../../Shared/ItemMenu/ItemMenu";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <TitleSection
        subHeading="Check it out"
        heading="from our menu"
      ></TitleSection>
      <div className="grid md:grid-cols-2 gap-10 grid-cols-1">
        {popular.map((item) => (
          <ItemMenu key={item._id} item={item}></ItemMenu>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <button className="btn btn-outline border-0 border-b-4">
          View full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
