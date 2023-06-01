import React from "react";
import TitleSection from "../../../components/TitleSection/TitleSection";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div classNameNameName="w-full px-10">
      <TitleSection
        subHeading={"what's new"}
        heading={"Add an Item"}
      ></TitleSection>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div classNameName="form-control w-full">
          <label classNameName="label">
            <span classNameName="label-text font-semibold">Recipe Name*</span>
          </label>
          <br />
          <input
            type="text"
            placeholder="Type here"
            classNameName="input input-bordered w-full"
            {...register("name", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
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
            <option>Drinks</option>
            <option>Dresserts</option>
          </select>
        </div>
        <div classNameName="form-control w-full max-w-xs">
          <label classNameName="label">
            <span classNameName="label-text font-semibold">Price*</span>
          </label>
          <br />
          <input
            type="number"
            placeholder="Type here"
            classNameName="input input-bordered w-full max-w-xs"
            {...register("price", { required: true })}
          />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Recipe Details</span>
          </label>
          <textarea
            class="textarea textarea-bordered h-24"
            placeholder="recipe"
            {...register("details", { required: true })}
          ></textarea>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Item Image</span>
          </label>
          <input
            type="file"
            class="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-sm mt-4 mb-4" />
      </form>
    </div>
  );
};

export default AddItem;
