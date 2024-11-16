import React, { useState } from "react";
import { useForm } from "react-hook-form";
import style from "./PostForm.module.css";

function PostForm({ addPost }) {
  const { register, handleSubmit, reset, formState } = useForm({ mode: "all" });
  const { errors } = formState;
  const [isActive, setIsActive] = useState(true);


  function onSubmit (data) {
    const newPost = {
      title: data.title,
      content: data.content,
    };
    addPost(newPost);
    reset();
  };


  function visible() {
    setIsActive(true);
  }

  function unvisible() {
    setIsActive(false);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={isActive ? style.formPost : style.unvisibleClass}
      >
        <h2 className={style.close} onClick={unvisible}>
          Close
        </h2>
        <label>Title</label>
        <input
          type="text"
          {...register("title", { required: "Enter the data" })}
          placeholder="Enter title"
        />
        {errors?.title && <p>{errors.title.message}</p>}

        <label>Text post</label>
        <input
          {...register("content", { required: "Enter the data" })}
          placeholder="Enter text"
        />
        {errors?.content && <p>{errors.content.message}</p>}

        <button type="submit">Create post</button>
      </form>
      <button onClick={visible}>Create</button>
    </div>
  );
}

export default PostForm;
