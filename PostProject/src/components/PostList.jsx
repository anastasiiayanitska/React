/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import style from "./PostList.module.css"
import img from "../images/user.png"

function PostList({ posts, deletePost }) {
  return (
    <div className={style.postList}>
    <h1>Post List</h1>
      {posts.length === 0 ? (
        <p>Empty list</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className={style.post}>
            <div>
              <img src={img} alt="" />
            </div>
            <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            </div>
            <div>
              <p>{post.id} posts</p>
            <button onClick={() => deletePost(post.id)}>Delete</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default PostList;