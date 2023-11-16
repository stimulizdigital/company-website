import React from "react";
import Link from "next/link";

const TopServices = () => {
  return <>
    <div className="features-area pb-75">
      <div className="container">
        <div className="features-inner-box">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="single-features-card">
                <div className="features-image">
                  <Link href="/services/service-details">

                    <img
                      src="/images/features/features-1.png"
                      alt="image"
                    />

                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/service-details">
                      Product Design
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr
                  </p>
                </div>
                <div className="hover-content">
                  <h3>
                    <Link href="/services/service-details">
                      Product Design
                    </Link>
                  </h3>
                  <Link href="/services/service-details" className="features-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="single-features-card" data-tilt>
                <div className="features-image" data-tilt>
                  <Link href="/services/service-details">

                    <img
                      src="/images/features/features-2.png"
                      alt="image"
                    />

                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/service-details">
                      Development
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr
                  </p>
                </div>
                <div className="hover-content">
                  <h3>
                    <Link href="/services/service-details">
                      Development
                    </Link>
                  </h3>
                  <Link href="/services/service-details" className="features-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-sm-6"
              data-aos="fade-down"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="single-features-card" data-tilt>
                <div className="features-image" data-tilt>
                  <Link href="/services/service-details">

                    <img
                      src="/images/features/features-3.png"
                      alt="image"
                    />

                  </Link>
                </div>
                <div className="content">
                  <h3>
                    <Link href="/services/service-details">
                      Data Analysis
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consetetur sadipscing elitr
                  </p>
                </div>
                <div className="hover-content">
                  <h3>
                    <Link href="/services/service-details">
                      Data Analysis
                    </Link>
                  </h3>
                  <Link href="/services/service-details" className="features-btn">
                    View More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default TopServices;
