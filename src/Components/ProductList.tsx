import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [product, setProduct] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching ", category);
    setProduct(["product 1", "product 2", "product 3"]);
  }, [category]);
  return <div>Product List</div>;
};

export default ProductList;
