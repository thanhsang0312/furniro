import React from "react";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.svg";
import like from "../../assets/images/like.svg";
import cart from "../../assets/images/cart.svg";
import search from "../../assets/images/search.svg";

const Header = () => {
  return (
    <header className="h-[100px]">
      <div className="container mx-auto px-4 w-full h-full flex justify-between items-center relative">
        <div className="header__logo">
          <a href="#">
            <img src={logo} alt="" />
          </a>
        </div>
        <ul className="header__nav flex absolute left-1/2 translate-x-[-50%] poppins-medium">
          <li className="capitalize px-[38px]">
            <a href="#">home</a>
          </li>
          <li className="capitalize px-[38px]">
            <a href="#">shop</a>
          </li>
          <li className="capitalize px-[38px]">
            <a href="#">about</a>
          </li>
          <li className="capitalize px-[38px]">
            <a href="#">contact</a>
          </li>
        </ul>
        <div className="header__cta flex ">
          <a href="#" className="px-[22px]">
            <img src={user} alt="" />
          </a>
          <a href="#" className="px-[22px]">
            <img src={search} alt="" />
          </a>
          <a href="#" className="px-[22px]">
            <img src={like} alt="" />
          </a>
          <a href="#" className="px-[22px]">
            <img src={cart} alt="" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
