import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import { getStrapiMedia } from '@/utils/api-helpers'


const ServiceSlider = ({data}) => {
 
  return (
    <>
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
                  We are technology solutions providing company all over the
                  world doing over 40 years.
                </p>
                <div className="services-section-btn">
                  <Link href="/services/services" className="default-btn" >
                   Explore All Services
                  </Link>
                </div>
              </div>
            </div>

            {data && (
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
                  {data.slice(0, 6).map((service) => (
                    <SwiperSlide key={service.id}>
                      <div className="services-item">
                        <div className="services-image">
                          <Link href={`/services/${service.attributes.slug}`}>
                              <img
                                src={
                                 getStrapiMedia(service.attributes.image.data.attributes.url)
                                }
                                alt={
                                  service.attributes.image.data.attributes
                                    .alternativeText
                                }
                              />
                          </Link>
                        </div>
                        <div className="services-content">
                          <h3>
                            <Link href={`/services/${service.attributes.slug}`}>
                    {service.attributes.title}
                            </Link>
                          </h3>
                          <p>{service.attributes.title}</p>
                          <Link href={`/services/${service.attributes.slug}`} className="services-btn" >
                              {service.attributes.btnText}
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceSlider
