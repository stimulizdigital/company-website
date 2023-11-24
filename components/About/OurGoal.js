import { getStrapiMedia } from "@/utils/api-helpers";
import React from "react";

const OurGoal = ({data}) => {
  return (
    <>
      <div className="about-area pt-100 pb-75">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-wrap-image" data-tilt>
              <img
                    src={ getStrapiMedia(data.attributes.image.data.attributes.url)}
                    alt={data.attributes.image.data.attributes.alternativeText}
                    data-aos="fade-down"
                    data-aos-delay="80"
                    data-aos-duration="800"
                    data-aos-once="true"
                  />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-wrap-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                 <span>{data.attributes.subTitle}</span>
                  <h3>{data.attributes.title}</h3>
                  <p>
                    {data.attributes.shortDec}
                  </p>
              </div>
            </div>
          </div>

          <div className="about-inner-box">
            <div className="row justify-content-center align-items-center">
              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                    <h3>{data.attributes.ourVisionTitle}</h3>
                    <p>
                      {data.attributes.ourVisionDec}
                    </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-down"
                  data-aos-delay="70"
                  data-aos-duration="700"
                  data-aos-once="true"
                >
                   <h3>{data.attributes.ourMissionTitle}</h3>
                    <p>
                      {data.attributes.ourMissionDec}
                    </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div
                  className="single-about-card"
                  data-aos="fade-up"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <div className="card-image" data-tilt>
                  <img 
                        src={getStrapiMedia(data.attributes.image2.data.attributes.url)}
                        alt={data.attributes.image2.data.attributes.alternativeText}
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-circle-shape">
          <img src="/images/about/about-circle.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default OurGoal;
