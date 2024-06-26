import React from "react";
import Header from "../../components/Header";
import dining from "../../assets/images/dining.jpg";
import living from "../../assets/images/living.jpg";
import bedroom from "../../assets/images/bedroom.jpg";
import rightArrow from "../../assets/images/rightArrow.svg";
import explore1 from "../../assets/images/explore1.jpg";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";

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
              <button className="capitalize text-white bg-primary-cl poppins-bold px-[72px] h-[74px]">
                buy now
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
        <section className="explore flex bg-[#FCF8F3] py-[100px]">
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
          <div className="carousel">
            <div className="carousel__item relative">
              <div className="carousel__item--thumbnail overflow-hidden aspect-[404/582]">
                <img
                  src={explore1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="carousel__item--content flex absolute bottom-[24px] left-[24px] items-end">
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
          </div>
        </section>
      </main>
      <Footer />
    </body>
  );
};

export default HomePage;
