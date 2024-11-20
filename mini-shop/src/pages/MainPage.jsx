import React, { useEffect, useState } from "react";
import axios from "axios";
import News from "../components/News/News";
import { PRODUCTS_URL } from "../utils";
import ProductCard from "../components/ProductCard/ProductCard";

export default function MainPage() {
  const [products, setProducts] = useState([]);

  function fetchProducts() {
    axios
      .get(PRODUCTS_URL)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <News />

      <h2>Товары</h2>
      <hr />
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
