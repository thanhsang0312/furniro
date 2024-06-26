import React from "react";
import productItem from "../../assets/images/productItem.jpg";

const ProductItem = () => {
  return (
    <div className="product__item w-fit">
      <div className="product__item--img flex w-fit relative">
        <img src={productItem} alt="" />
        <div className="discount text-white poppins-medium leading-[24px] w-[48px] h-[48px] bg-[#e97171b2] rounded-[50%] flex items-center justify-center absolute top-[24px] right-[24px]">
          -30%
        </div>
      </div>
      <div className="product__item--detail pl-[15px] pt-[16px] pb-[30px] pr-[20px] bg-[#F4F5F7]">
        <h4 className="name poppins-semibold text-[24px] leading-[19.2px] text-[#3A3A3A]">
          Syltherine
        </h4>
        <p className="category poppins-medium leading-[24px] text-[#898989] my-[8px]">
          Stylish cafe chair
        </p>
        <div className="price flex justify-between">
          <span className="price__current poppins-semibold text-[20px] leading-[24px] text-[#3A3A3A]">
            Rp 2.500.000
          </span>
          <span className="price__discounted poppins-regular leading-[24px] text-[#B0B0B0] line-through">
            Rp 3.500.000
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
