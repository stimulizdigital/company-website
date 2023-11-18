import React from "react";
import Link from "next/link";

const AllServicesCardStyle2 = () => {
  return <>
    <div className="services-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span>SERVICES</span>
          <h2>
            We Provide the Best Quality <b>Services</b>
          </h2>
          <p>
            We are technology solutions providing company all over the world
            doing over 40 years. lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="services-image">
                <Link href="/services/service-details" legacyBehavior>

                  <img src="/images/services/services-1.jpg" alt="image" />

                </Link>
              </div>
              <div className="services-content">
                <h3>
                  <Link href="/services/service-details">
                    Database Administrator
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                </p>
                <Link href="/services/service-details" className="services-btn">
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="services-image">
                <Link href="/services/service-details" legacyBehavior>

                  <img src="/images/services/services-2.jpg" alt="image" />

                </Link>
              </div>
              <div className="services-content">
                <h3>
                  <Link href="/services/service-details">
                    Software Development
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                </p>
                <Link href="/services/service-details" className="services-btn">
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="services-image">
                <Link href="/services/service-details" legacyBehavior>

                  <img src="/images/services/services-3.jpg" alt="image" />

                </Link>
              </div>
              <div className="services-content">
                <h3>
                  <Link href="/services/service-details">
                    App Development
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                </p>
                <Link href="/services/service-details" className="services-btn">
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="services-image">
                <Link href="/services/service-details" legacyBehavior>

                  <img src="/images/services/services-4.jpg" alt="image" />

                </Link>
              </div>
              <div className="services-content">
                <h3>
                  <Link href="/services/service-details">
                    Web Development
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                </p>
                <Link href="/services/service-details" className="services-btn">
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="services-image">
                <Link href="/services/service-details" legacyBehavior>

                  <img src="/images/services/services-5.jpg" alt="image" />

                </Link>
              </div>
              <div className="services-content">
                <h3>
                  <Link href="/services/service-details">
                    Analytic Solutions
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                </p>
                <Link href="/services/service-details" className="services-btn">
                  View More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="services-item">
              <div className="services-image">
                <Link href="/services/service-details" legacyBehavior>

                  <img src="/images/services/services-6.jpg" alt="image" />

                </Link>
              </div>
              <div className="services-content">
                <h3>
                  <Link href="/services/service-details">
                    Product Design
                  </Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet con setetur sadipscing elitr sed…
                </p>
                <Link href="/services/service-details" className="services-btn">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="services-shape-1">
        <img src="/images/services/services-shape-1.png" alt="image" />
      </div>
      <div className="services-shape-2">
        <img src="/images/services/services-shape-2.png" alt="image" />
      </div>
    </div>
  </>;
};

export default AllServicesCardStyle2;
