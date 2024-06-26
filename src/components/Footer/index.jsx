import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4">
        <div className="row w-full bg-[#00000042] h-[1px]"></div>
        <div className="footer__top grid grid-cols-12 my-[47px]">
          <div className="info col-start-1 col-end-4 row-start-1 row-end-2">
            <p className="poppins-bold text-[24px] text-black">Funiro.</p>
            <div className="address poppins-regular text-[#9F9F9F]">
              <p className="address__company">Ho Chi Minh city, Vietnam</p>
              <p className="address__phone">0978787878</p>
              <p className="address__email">thanhsang0312@gmail.com</p>
            </div>
          </div>
          <div className="navigate col-start-5 col-end-12 row-start-1 row-end-2 flex justify-between">
            <div className="navigate__page">
              <p className="navigate__page--title poppins-medium text-[#9F9F9F] mb-[55px] capitalize">
                links
              </p>
              <ul className="capitalize poppins-medium text-black flex flex-col gap-[46px]">
                <li>
                  <a href="#">home</a>
                </li>
                <li>
                  <a href="#">shop</a>
                </li>
                <li>
                  <a href="#">about</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
            </div>
            <div className="navigate__page">
              <p className="navigate__page--title poppins-medium text-[#9F9F9F] mb-[55px] capitalize">
                help
              </p>
              <ul className="capitalize poppins-medium text-black flex flex-col gap-[46px]">
                <li>
                  <a href="#">Payment Options</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Privacy Policies</a>
                </li>
              </ul>
            </div>
            <div className="navigate__page">
              <p className="navigate__page--title poppins-medium text-[#9F9F9F] mb-[55px] capitalize">
                Newsletter
              </p>
              <form action="">
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="outline-none border-b-2 border-black mr-[11px] pr-[27px]"
                />
                <input
                  type="submit"
                  value="subscribe"
                  className="uppercase poppins-medium text-[14px] text-black border-b-2 border-black"
                />
              </form>
            </div>
          </div>
        </div>
        <div className="row w-full bg-[#00000042] h-[1px]"></div>
        <div className="footer__bottom pt-[35px] pb-[38px]">
          <p className="poppins-regular text-black">
            2023 furino. All rights reverved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
