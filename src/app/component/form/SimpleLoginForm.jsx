"use client";
import React from "react";
import { useForm } from "react-hook-form";

function SimpleLoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data : ", data);
  };
  console.log(watch("password"));

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Name</label>
          <input defaultValue="test" {...register("name")} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span>Password is required</span>}
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default SimpleLoginForm;
