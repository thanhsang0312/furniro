import React from "react";
import productItem from "../../assets/images/productItem.jpg";
import productItem2 from "../../assets/images/productItem2.jpg";
import productItem3 from "../../assets/images/productItem3.jpg";
import productItem4 from "../../assets/images/productItem4.jpg";
import ProductItem from "../ProductItem";

const ProductList = () => {
  const productImg = [productItem, productItem2, productItem3, productItem4];
  return (
    <div className="product__list grid grid-cols-4 gap-[32px] my-[32px]">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};

export default ProductList;
