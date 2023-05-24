import React from "react";
import TitleSection from "../../../components/TitleSection/TitleSection";
import FeaturedImage from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed pt-4 my-16">
      <TitleSection
        subHeading="Check it out"
        heading="Featured Item"
      ></TitleSection>
      <div className="md:flex justify-center bg-slate-500 bg-opacity-30 items-center pb-24 pt-12 px-40">
        <div>
          <img src={FeaturedImage} alt="" />
        </div>
        <div className="md:ml-16 text-[white]">
          <p className="mb-4">Aug 29, 2023</p>
          <p>WHERE CAN I GET SOME?</p>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            inventore dolor quos distinctio! Voluptates nihil, doloremque,
            aperiam sint modi sed repellendus hic tempore illo ipsum nisi earum,
            quae ullam amet soluta in consectetur nostrum? Rem natus pariatur
            eius excepturi minus unde hic reiciendis voluptatum, placeat,
            deserunt consequuntur nam omnis asperiores.
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
