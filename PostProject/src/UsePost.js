import { useState, useEffect } from "react";
import axios from "axios";

export default function usePosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6718a8337fc4c5ff8f4a6c69.mockapi.io/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function addPost(newPost) {
    axios
      .post("https://6718a8337fc4c5ff8f4a6c69.mockapi.io/posts", newPost)
      .then((response) => {
        setPosts([response.data, ...posts]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function deletePost(id) {
    axios
      .delete(`https://6718a8337fc4c5ff8f4a6c69.mockapi.io/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return { posts, addPost, deletePost };
}
