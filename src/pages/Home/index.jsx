import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeService from "../../services/homeService";
import { Carousel, Trending } from "../../components";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [trending, setTrending] = useState([]);

  async function getCategoriesAndProducts() {
    const data = await HomeService.getCategoriesWithProducts();
    if (data) {
      setCategories(data);
    }
  }

  const getTrendingProducts = async () => {
    const data = await HomeService.getTrending();
    if (data) {
      setTrending(data);
    }
  };

  useEffect(() => {
    getCategoriesAndProducts();
    getTrendingProducts();
  }, []);

  return (
    <>
      <Trending trendingProducts={trending} />
      {categories.map((category) => (
        <Carousel category={category} />
      ))}
    </>
  );
}
