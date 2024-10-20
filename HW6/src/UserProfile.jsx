// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./UserProfile.module.css";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [image, setImage] = useState(0);

  async function fetchUser() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const usersLength = response.data.length;
      setUser(response.data[currentIndex]);
      setCurrentIndex(currentIndex + 1);
      if (currentIndex == usersLength - 1) setCurrentIndex(0);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  }
  async function fetchImage() {
    try {
      const response = await axios.get(
        "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10"
      );
      setImage(response.data[currentIndex]);
    } catch (error) {
      console.error("Error fetching user:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
    fetchImage();
  }, []);

  function clicked() {
    fetchUser();
    fetchImage();
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.userProfile}>
      <div className={styles.avatar}>
        <img src={image.url} alt={image.id} />
      </div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Location: {user.address.city}</p>
      <button onClick={clicked} className={styles.button}>
        Load New User
      </button>
    </div>
  );
}
