import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import { Autoplay } from "swiper";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/api-helpers";

const HeroSlider = ({data}) => {
  console.log("data",data)
  return <>
  { 
  HeroSlider && 
  <div className="main-slides-area">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper home-slides"
      >

      { 
      data.attributes.sliderITem.map((item) => (
        <>
      <SwiperSlide key={item.id}>
          <div className="main-slides-item">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="main-slides-content">
                    <span
                      data-aos="fade-right"
                      data-aos-delay="70"
                      data-aos-duration="700"
                      data-aos-once="true"
                    >
                      {item.subTitle}
                    </span>
                    <h1
                      data-aos="fade-right"
                      data-aos-delay="70"
                      data-aos-duration="700"
                      data-aos-once="true"
                    >
                       {item.title}
                    </h1>
                    <p
                      data-aos="fade-right"
                      data-aos-delay="70"
                      data-aos-duration="700"
                      data-aos-once="true"
                    >

                      {item.shortDec}

                    </p>

                    <div
                      className="slides-btn"
                      data-aos="fade-right"
                      data-aos-delay="70"
                      data-aos-duration="700"
                      data-aos-once="true"
                    >
                      <Link href={item.btnLink} className="default-btn">
                         {item.btnText}
                      </Link>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-5 col-md-12"
                  data-aos="fade-down"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                  <div className="main-slides-image slider1-mask">
                    <img 
src={  
  getStrapiMedia(
  item.image.data.attributes.url) }
                     alt={item.image.data.attributes.alternativeText}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
          </>

      ))
     }
     
     
      </Swiper>

      {/* Shape Images */}
      <div className="main-slides-shape-1">
        <img 
          src="/images/home-slides/slides-shape-cyb.png" 
          alt="image" 
        />
      </div>
      <div className="main-slides-shape-2">
        <img 
          src="/images/home-slides/slider-shapes-mobile.png" 
          alt="image" 
        />
      </div>
      <div className="main-slides-shape-3">
        <img 
          src="images/home-slides/slides-shape-desktop.png" 
          alt="image" 
        />
      </div>
      <div className="main-slides-shape-4">
        <img 
          src="images/home-slides/slides-shape-blockchain.png" 
          alt="image" 
        />
      </div>
      <div className="main-slides-shape-5">
        <img 
          src="/images/home-slides/slides-shape-5.png" 
          alt="image" 
        />
      </div>
    </div>
    
    }
  </>;
};

export default HeroSlider;
