"use client";
import { movieSchema } from "@/app/schema/movieSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

// manually want to parse
try {
  console.log(
    "parse",
    movieSchema.parse({
      title: "",
      director: "",
      year: "2010",
    }),
  );
} catch (error) {
  console.log(error);
}

function MovieForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "Flipped",
      year: 2015,
      director: "",
    },
    resolver: zodResolver(movieSchema),
  });

  const onSubmit = (data) => {
    console.log("Form data : ", data);
  };
  return (
    <div>
      <h3>MovieForm</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input {...register("title")} />
          <p style={{ color: "red" }}>{errors.title?.message}</p>
        </div>
        <div>
          <label>Release Year</label>
          <input type="number" {...register("year")} />
          <p style={{ color: "red" }}>{errors.year?.message}</p>
        </div>
        <div>
          <label>Director</label>
          <input {...register("director")} />
          <p style={{ color: "red" }}>{errors.director?.message}</p>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

export default MovieForm;
