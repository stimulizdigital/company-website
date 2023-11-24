import { getStrapiMedia } from "@/utils/api-helpers";
import React from "react";
import ReactMarkDown from "react-markdown";




const WhyChooseUs = ({ data }) => {
  return (
  <>
    {data && (
      <div className="choose-area pt-100 pb-75">
        <div className="container">
          <div className="section-title">
            <span>{data.attributes.subTitle}</span>

            <ReactMarkDown>
              {data.attributes.titleAndShortText}
            </ReactMarkDown>
          </div>

          <div className="row justify-content-center">
            {data.attributes.reason.map((info) => (
              <div className="col-lg-3 col-sm-6" key={info.id}>
                <div
                  className="single-choose-card"
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="600"
                  data-aos-once="true"
                >
                  <div className="choose-image">
                    <img
                      src={getStrapiMedia(info.image.data.attributes.url)}
                      alt={info.image.data.attributes.alternativeText}
                    />
                  </div>
                  <div className="choose-content">
                    <h3>{info.title}</h3>
                    <p>{info.shortText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shape Images */}
        <div className="choose-shape-1">
          <img src="/images/choose/choose-shape.png" alt="image" />
        </div>
        <div className="choose-shape-2">
          <img src="/images/choose/choose-shape-2.png" alt="image" />
        </div>
      </div>
    )}

</>
  );
};

export default WhyChooseUs;
