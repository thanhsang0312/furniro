import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import bedroom from "../../assets/images/bedroom.jpg";
import dining from "../../assets/images/dining.jpg";
import explore1 from "../../assets/images/explore1.jpg";
import living from "../../assets/images/living.jpg";
import rightArrow from "../../assets/images/rightArrow.svg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProductList from "../../components/ProductList";
import { Navigation, Pagination } from "swiper/modules";

const HomePage = () => {
  return (
    <body>
      <Header />
      <main>
        <section className="hero">
          <div className="container mx-auto px-4 h-full flex justify-end items-center">
            <div className="hero__content h-fit top-[154px] right-[98px] bg-[#FFF3E3] max-w-[643px] pl-[39px] pt-[62px] pb-[37px] pr-[58px] rounded-[10px]">
              <p className="capitalize poppins-semibold tracking-[3px] text-txt-grey">
                new arrival
              </p>
              <h1 className="capitalize poppins-bold text-[52px] text-primary-cl leading-[65px]">
                discover out new collection
              </h1>
              <p className="poppins-medium text-[18px] text-txt-grey leading-6 mt-[17px] mb-[46px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <button className="btn-flip capitalize text-white bg-primary-cl poppins-bold ">
                {/* buy now */}
              </button>
            </div>
          </div>
        </section>
        <section className="range py-[56px]">
          <div className="container mx-auto px-4">
            <div className="textbox text-center mb-[62px]">
              <h2 className="heading poppins-bold text-[32px] text-txt-grey">
                Browse The Range
              </h2>
              <p className="desc poppins-regular text-[20px] text-[#666666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="range__feature flex justify-between gap-[45px]">
              <div className="ranger__feature--item flex flex-col items-center">
                <div className="thumbnail aspect-[381/480] overflow-hidden rounded-[8px] mb-[30px]">
                  <img
                    src={dining}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="title capitalize poppins-semibold text-[24px] text-txt-grey">
                  dining
                </h4>
              </div>
              <div className="ranger__feature--item flex flex-col items-center">
                <div className="thumbnail aspect-[381/480] overflow-hidden rounded-[8px] mb-[30px]">
                  <img
                    src={living}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="title capitalize poppins-semibold text-[24px] text-txt-grey">
                  living
                </h4>
              </div>
              <div className="ranger__feature--item flex flex-col items-center">
                <div className="thumbnail aspect-[381/480] overflow-hidden rounded-[8px] mb-[30px]">
                  <img
                    src={bedroom}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="title capitalize poppins-semibold text-[24px] text-txt-grey">
                  bedroom
                </h4>
              </div>
            </div>
          </div>
        </section>
        <section className="products pb-[69px]">
          <div className="container mx-auto px-4">
            <div className="textbox text-center">
              <h2 className="heading poppins-bold text-[40px] text-txt-grey">
                Our Products
              </h2>
            </div>
            <ProductList />
            <button className="pl-[82px] pr-[74px] h-[48px] border border-primary-cl text-primary-cl poppins-semibold leading-[24px] mx-auto block">
              Show More
            </button>
          </div>
        </section>
        <section className="carousel flex items-center bg-[#FCF8F3] py-[100px]">
          <div className="textbox max-w-[442px]">
            <h2 className="heading poppins-bold text-[40px]">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="desc poppins-medium leading-[24px] text-[#616161]">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </p>
            <button className="capitalize poppins-semibold leading-[24px] px-[36px] h-[48px] text-white bg-primary-cl mt-[25px]">
              explore more
            </button>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            className="ml-[40px]"
            spaceBetween={24}
            width={404}
            navigation
            pagination={{ clickable: true }}

            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`swiper__item relative ${isActive && "active"}`}
                >
                  <div className="swiper__item--thumbnail overflow-hidden aspect-[404/582]">
                    <img
                      src={explore1}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="swiper__item--content flex absolute bottom-[24px] left-[24px] items-end">
                    <div className="info bg-[#ffffffb8] py-[32px] pl-[32px] pr-[17px]">
                      <div className="info__type flex items-center gap-[4px]">
                        <span className="info__type--number poppins-medium leading-[24px] text-[#616161]">
                          01
                        </span>
                        <span className="info__type--dash"></span>
                        <span className="info__type--type poppins-medium leading-[24px] text-[#616161]">
                          Bed Room
                        </span>
                      </div>
                      <p className="info__desc poppins-semibold text-[28px]">
                        Inner Peace
                      </p>
                    </div>
                    <button className="px-[14px] h-[48px] bg-primary-cl">
                      <img src={rightArrow} alt="" />
                    </button>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`swiper__item relative ${isActive && "active"}`}
                >
                  <div className="swiper__item--thumbnail overflow-hidden aspect-[404/582]">
                    <img
                      src={explore1}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="swiper__item--content flex absolute bottom-[24px] left-[24px] items-end">
                    <div className="info bg-[#ffffffb8] py-[32px] pl-[32px] pr-[17px]">
                      <div className="info__type flex items-center gap-[4px]">
                        <span className="info__type--number poppins-medium leading-[24px] text-[#616161]">
                          01
                        </span>
                        <span className="info__type--dash"></span>
                        <span className="info__type--type poppins-medium leading-[24px] text-[#616161]">
                          Bed Room
                        </span>
                      </div>
                      <p className="info__desc poppins-semibold text-[28px]">
                        Inner Peace
                      </p>
                    </div>
                    <button className="px-[14px] h-[48px] bg-primary-cl">
                      <img src={rightArrow} alt="" />
                    </button>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`swiper__item relative ${isActive && "active"}`}
                >
                  <div className="swiper__item--thumbnail overflow-hidden aspect-[404/582]">
                    <img
                      src={explore1}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="swiper__item--content flex absolute bottom-[24px] left-[24px] items-end">
                    <div className="info bg-[#ffffffb8] py-[32px] pl-[32px] pr-[17px]">
                      <div className="info__type flex items-center gap-[4px]">
                        <span className="info__type--number poppins-medium leading-[24px] text-[#616161]">
                          01
                        </span>
                        <span className="info__type--dash"></span>
                        <span className="info__type--type poppins-medium leading-[24px] text-[#616161]">
                          Bed Room
                        </span>
                      </div>
                      <p className="info__desc poppins-semibold text-[28px]">
                        Inner Peace
                      </p>
                    </div>
                    <button className="px-[14px] h-[48px] bg-primary-cl">
                      <img src={rightArrow} alt="" />
                    </button>
                  </div>
                </div>
              )}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => (
                <div
                  className={`swiper__item relative ${isActive && "active"}`}
                >
                  <div className="swiper__item--thumbnail overflow-hidden aspect-[404/582]">
                    <img
                      src={explore1}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="swiper__item--content flex absolute bottom-[24px] left-[24px] items-end">
                    <div className="info bg-[#ffffffb8] py-[32px] pl-[32px] pr-[17px]">
                      <div className="info__type flex items-center gap-[4px]">
                        <span className="info__type--number poppins-medium leading-[24px] text-[#616161]">
                          01
                        </span>
                        <span className="info__type--dash"></span>
                        <span className="info__type--type poppins-medium leading-[24px] text-[#616161]">
                          Bed Room
                        </span>
                      </div>
                      <p className="info__desc poppins-semibold text-[28px]">
                        Inner Peace
                      </p>
                    </div>
                    <button className="px-[14px] h-[48px] bg-primary-cl">
                      <img src={rightArrow} alt="" />
                    </button>
                  </div>
                </div>
              )}
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="share py-[67px]">
          <div className="container mx-auto px-4">
            <div className="textbox text-center">
              <p className="poppins-semibold text-[20px] text-[#616161] leading-[24px]">
                Share your setup with
              </p>
              <h3 className="poppins-bold text-[40px] text-[#3A3A3A]">
                #FuniroFurniture
              </h3>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default HomePage;
