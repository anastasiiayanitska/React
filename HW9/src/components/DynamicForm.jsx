/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import React from "react";
import { useUser } from "../context/UserContext";

export default function DynamicForm() {
  const { register, formState, handleSubmit, watch } = useForm({ mode: "all" });
  const { errors } = formState;
  const nameValue = watch("name");
  const { logIn } = useUser();

  function formSubmit(values) {
    logIn(values.name, values.secondName);
  }

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <h1>Registration</h1>
      <input
        type="text"
        {...register("name", {
          required: "Enter the data",
        })}
      />

      {errors?.name && (
        <p
          style={{
            color: "red",
          }}
        >
          {errors.name.message}
        </p>
      )}
      {nameValue && (
        <input
          type="secondName"
          {...register("secondName", { required: "Enter the data" })}
        />
      )}
      {errors?.secondName && (
        <p
          style={{
            color: "red",
          }}
        >
          {errors.secondName.message}
        </p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
