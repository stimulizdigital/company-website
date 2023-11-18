import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

const ServiceSlider = () => {
  return <>
    <div className="services-area with-radius ptb-100">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12">
            <div
              className="services-section-content"
              data-aos="fade-down"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <span>SERVICES</span>
              <h3>
                We Provide the Best Quality <b>Services</b>
              </h3>
              <p>
               
              </p>
              <div className="services-section-btn">
                <Link href="/services/services" className="default-btn">
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-md-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper services-slides"
            >
              <SwiperSlide>
                <div className="services-item">
                  <div className="services-image">
                    <Link href="/services/service-details" legacyBehavior>

                      <img
                        src="/images/services/serives-1-software development.png"
                        alt="image"
                      />

                    </Link>
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link href="/services/service-details">
                        Software Development
                      </Link>
                    </h3>
                    <p>
                    We turn great ideas into software solutions that work ...
                    </p>
                    <Link href="/services/service-details" className="services-btn">
                      View More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="services-item">
                  <div className="services-image">
                    <Link href="/services/service-details" legacyBehavior>

                      <img
                        src="images/services/services-2-App-Development.png"
                        alt="image"
                      />

                    </Link>
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link href="/services/service-details">
                        App Development
                      </Link>
                    </h3>
                    <p>
                      
Elevate your business with our intuitive app development... 
                    </p>
                    <Link href="/services/service-details" className="services-btn">
                      View More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="services-item">
                  <div className="services-image">
                    <Link href="/services/service-details" legacyBehavior>

                      <img
                        src="/images/services/services-3-webdevelopment.png"
                        alt="image"
                      />

                    </Link>
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link href="/services/service-details">
                        Web Development
                      </Link>
                    </h3>
                    <p>
                    Our web development services transform your vision ...
                    </p>
                    <Link href="/services/service-details" className="services-btn">
                      View More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="services-item">
                  <div className="services-image">
                    <Link href="/services/service-details" legacyBehavior>

                      <img
                        src="/images/services/services-4-analytics.png"
                        alt="image"
                      />

                    </Link>
                  </div>
                  <div className="services-content">
                    <h3>
                      <Link href="/services/service-details">
                        Analytic Solutions
                      </Link>
                    </h3>
                    <p>
                     
Unlock insights and drive decision-making ... 
                    </p>
                    <Link href="/services/service-details" className="services-btn">
                      View More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default ServiceSlider;
