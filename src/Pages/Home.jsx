import React from "react";
import { Link, useLoaderData } from "react-router";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";

const Home = () => {
  const products = useLoaderData();
  const data=useProducts();
  console.log(data);
  const featuredProducts=products.slice(0,6)
  return (
    <div>
        <div className="flex justify-between items-center py-5">
            <h1 className="font-semibold text-2xl">Featured Products</h1>
            <Link className="btn btn-outline" to='/products'>See All Products</Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
