import React from "react";
import TitleSection from "../../../components/TitleSection/TitleSection";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit ,reset } = useForm();

  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imgUrl = imageResponse.data.display_url;
          const { name, price, recipe, category } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            recipe,
            category,
            image: imgUrl,
          };
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log(data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Food Add On The Cart",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className="w-full px-10 mt-44">
      <div className="w-full inline-block">
        <TitleSection
          subHeading={"what's new"}
          heading={"Add an Item"}
        ></TitleSection>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <br />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full"
            {...register("name", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="flex justify-center items-center">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option>Pizza</option>
              <option>Souap</option>
              <option>Salad</option>
              <option>Dresserts</option>
              <option>Deshi</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full ml-5">
            <label className="label">
              <span className="label-text">price*</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              className="input input-bordered w-full"
              {...register("price", { required: true })}
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="recipe"
            {...register("recipe", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Item Image</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full"
            {...register("image", { required: true })}
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn btn-sm mt-4 mb-4 flex mx-auto"
        />
      </form>
    </div>
  );
};

export default AddItem;
