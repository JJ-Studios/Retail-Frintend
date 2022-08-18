import React, { useState } from "react";
import CategoryBrandComponent from "../../Components/Categories/CategoryBrandComponent";
import Headbanner from "../../Components/Headbanner";

function CategoryBrand() {
  const [product, setProduct] = useState("");

  return (
    <div>
      <Headbanner />
      <CategoryBrandComponent />
    </div>
  );
}

export default CategoryBrand;
