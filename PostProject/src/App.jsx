/* eslint-disable no-unused-vars */
import React from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import usePosts from "./UsePost";

function App() {
  const { posts, addPost, deletePost } = usePosts();

  return (
    <div>
      <PostForm addPost={addPost} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;
