import React, { useState } from "react";
import CategoryProductComponent from "../../Components/Categories/CategoryProductComponent";
import Headbanner from "../../Components/Headbanner";

function CategoryProduct() {
  const [product, setProduct] = useState("");

  return (
    <div>
      <Headbanner />
      <CategoryProductComponent />
    </div>
  );
}

export default CategoryProduct;
