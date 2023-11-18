import React from "react";
import Link from "next/link";

const WhyChooseUs = () => {
  return <>
    <div className="choose-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span>WHY CHOOSE US</span>
          <h2>
          Boost sales and grow your business with our <b>bold solutions</b>.
          </h2>
          <p>
            We are leading technology solutions providing company all over the
            world doing over 40 years lorem ipsum dolor sit amet.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div
              className="single-choose-card"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <div className="choose-image">
                <Link href="/services/service-details" legacyBehavior>

                  <img src="/images/choose/choose-1.png" alt="image" />

                </Link>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="/services/service-details">
                    Mobile Apps
                  </Link>
                </h3>
                <p>
                Crafting the future of mobile experiences with React Native, Flutter, iOS, and Android...
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div
              className="single-choose-card"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <div className="choose-image">
                <Link href="/services/service-details" legacyBehavior>

                  <img src="/images/choose/choose-2.png" alt="image" />

                </Link>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="/services/service-details">
                    Branding Strategy
                  </Link>
                </h3>
                <p>
                Shaping Distinctive Identities: Unveiling the Art of Branding Strategy, Where Creativity...
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div
              className="single-choose-card"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <div className="choose-image">
                <Link href="/services/service-details" legacyBehavior>

                  <img src="/images/choose/choose-3.png" alt="image" />

                </Link>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="/services/service-details">
                    Graphic Design
                  </Link>
                </h3>
                <p>
                Unlock the Power of Visual Storytelling with Our Graphic Design Services...
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div
              className="single-choose-card"
              data-aos="fade-up"
              data-aos-delay="80"
              data-aos-duration="1200"
              data-aos-once="true"
            >
              <div className="choose-image">
                <Link href="/services/service-details" legacyBehavior>

                  <img src="/images/choose/choose-4.png" alt="image" />

                </Link>
              </div>
              <div className="choose-content">
                <h3>
                  <Link href="/services/service-details">
                    Search Optimization
                  </Link>
                </h3>
                <p>
                Boost Your Online Visibility with Our Premier SEO Services...
                </p>
              </div>
            </div>
          </div>
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
  </>;
};

export default WhyChooseUs;
