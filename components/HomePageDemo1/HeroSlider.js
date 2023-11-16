import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination } from "swiper";
import { Autoplay } from "swiper";
import Link from "next/link";

const HeroSlider = () => {
  return <>
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
        <SwiperSlide>
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
                    Elevating Your Potential with Premier Tech Solutions.
                    </span>
                    <h1
                      data-aos="fade-right"
                      data-aos-delay="70"
                      data-aos-duration="700"
                      data-aos-once="true"
                    >
                      Unleashing Innovation in IT Solutions
                    </h1>
                    <p
                      data-aos="fade-right"
                      data-aos-delay="70"
                      data-aos-duration="700"
                      data-aos-once="true"
                    >
                      Dive into a world where innovation meets excellence. As a leading provider of technology solutions, we empower your business with cutting-edge IT strategies tailored for global success. Embrace the transformation and propel your vision forward with us.
                    </p>

                    <div
                      className="slides-btn"
                      data-aos="fade-right"
                      data-aos-delay="70"
                      data-aos-duration="700"
                      data-aos-once="true"
                    >
                      <Link href="/contact" className="default-btn">
                        
                          Get Started
                        
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
                    <img src="images/home-slides/slides1-humanoid.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
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
                      Ignite Innovation with Elite Tech Mastery
                    </span>
                    <h1
                      data-aos="fade-right"
                      data-aos-delay="70"
                      data-aos-duration="700"
                      data-aos-once="true"
                    >
                      Crafting Tomorrow's IT Solutions Today
                    </h1>
                    <p
                      data-aos="fade-right"
                      data-aos-delay="70"
                      data-aos-duration="700"
                      data-aos-once="true"
                    >
                      Elevate your digital experience with our razor-sharp technology services. We're not just in the business of IT solutions; we're in the business of breakthroughs. Join forces with us and navigate the tech frontier with confidence and creativity.
                    </p>

                    <div
                      className="slides-btn"
                      data-aos="fade-right"
                      data-aos-delay="70"
                      data-aos-duration="700"
                      data-aos-once="true"
                    >
                      <Link href="/contact" className="default-btn">
                        
                          Get Started
                        
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
                  <div className="main-slides-image slider2-mask">
                    <img src="/images/home-slides/cyber security.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </SwiperSlide>
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
  </>;
};

export default HeroSlider;
