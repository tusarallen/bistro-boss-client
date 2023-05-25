import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import TitleSection from "../../../components/TitleSection/TitleSection";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-12">
      <TitleSection
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></TitleSection>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="m-28 flex flex-col items-center my-16 mx-24 text-center">
              <div style={{ fontSize: "40px", marginBottom: "30px" }}>
                <FaQuoteLeft></FaQuoteLeft>
              </div>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p className="my-2">{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
