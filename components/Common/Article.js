import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Link from "next/link";
import { getStrapiMedia } from "@/utils/api-helpers";

const Article = ({data}) => {
  return <>
    <div className="blog-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span>ARTICLE</span>
          <h2>
            Read Our Blog To Get All Recent Tech <b>News</b>
          </h2>
        </div>

        {data && (
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
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper blog-slides"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
              {data.slice(0, 5).map((blog) => (
                <SwiperSlide key={blog.id}>
                  <div className="blog-card">
                    <div className="row align-items-center">
                      <div className="col-lg-6">
                        <div className="blog-image">
                          <Link href={`/blog/${blog.attributes.slug}`}>
                              <img
                                src={
                                 getStrapiMedia(blog.attributes.image.data.attributes.url)
                                }
                                alt={
                                  blog.attributes.image.data.attributes
                                    .alternativeText
                                }
                              />
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="blog-content">
                          <div className="date">{blog.attributes.date}</div>
                          <h3>
                            <Link href={`/blog/${blog.attributes.slug}`}>
                                {blog.attributes.title}
                            </Link>
                          </h3>
                          <p>
                            {blog.attributes.shortText}
                          </p>
                          <Link href={`/blog/${blog.attributes.slug}`} className="blog-btn">
                          View More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
      </div>
    </div>
  </>;
};

export default Article;
