import React from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="h-50 w-50">
      <form
        className="bg-red-300 h-[20rem] w-[50rem] flex flex-col items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>First Name</label>
        <input
          className="w-[10rem] border-2 "
          {...register("firstName")}
          placeholder="firstName"
        />  {errors.firstName && <span>This field is required</span>}
        <label>Last Name</label>

        <input
          className="w-[10rem] border-2"
          {...register("lastName")}
          placeholder="lastname"
        />  {errors.lastName && <span>This field is required</span>}
        <label>Age</label>

        <input className="w-[1-rem] border-2" {...register("age")} />

        <button type="submit" className="bg-pink-500 p-4 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
