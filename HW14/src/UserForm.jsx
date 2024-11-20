import React from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { setUserInfo } from "./redux/actions";

const UserForm = ({ setUserInfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setUserInfo(data);
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>
          Name:
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
          />
        </label>
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div>
        <label>
          Status:
          <input
            type="text"
            {...register("status", { required: "Status is required" })}
          />
        </label>
        {errors.status && (
          <p style={{ color: "red" }}>{errors.status.message}</p>
        )}
      </div>
      <button type="submit">Update</button>
    </form>
  );
};

export default connect(null, { setUserInfo })(UserForm);
