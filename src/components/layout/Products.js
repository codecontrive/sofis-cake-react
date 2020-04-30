import React from "react";
import ItemCard from "src/components/body/ItemCard";
import ProductsGrid from "src/components/body/ProductsGrid";

const Products = () => {
  return <ProductsGrid chlidren={<ItemCard />} />;
};

export default Products;
