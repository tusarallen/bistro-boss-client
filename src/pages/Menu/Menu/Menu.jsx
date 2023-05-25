import React from "react";
import { Helmet } from "react-helmet-async";
import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import Cover from "../../Shared/Cover/Cover";
import useMenu from "../../../hooks/useMenu";
import TitleSection from "../../../components/TitleSection/TitleSection";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImage} title="our menu" />
      <TitleSection
        subHeading="Don't Miss"
        heading="Today's Offered"
      ></TitleSection>
      {/* offer menu items */}
      <MenuCategory items={offered} />
      {/* dessert menu items */}
      <MenuCategory items={dessert} title={"dessert"} img={dessertImg} />
      {/* pizza menu items */}
      <MenuCategory items={dessert} title={"pizza"} img={pizzaImg} />
      {/* salad menu items */}
      <MenuCategory items={salad} title={"salad"} img={saladImg} />
      {/* soup menu items */}
      <MenuCategory items={soup} title={"soup"} img={soupImg} />
    </div>
  );
};

export default Menu;
