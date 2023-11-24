import React from "react";
import Link from "next/link";
import ReactMarkDown from "react-markdown";
import { getStrapiMedia } from "@/utils/api-helpers";

const WhoWeAre = ({data}) => {
  return   (<>
    <div className="about-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">
              <img
                src={getStrapiMedia(data.attributes.image.data.attributes.url)}
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
              className="about-content"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <span>
              {data.attributes.subTitle}
                </span>
          <ReactMarkDown>
          {data.attributes.longDec}
          </ReactMarkDown>
              <div className="about-btn">
                <Link href={data.attributes.btnLink} className="default-btn">
                {data.attributes.btnText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape-1">
        <img src="/images/about/about-shape.png" alt="image" />
      </div>
    </div>
  </>
  );
};

export default WhoWeAre;
