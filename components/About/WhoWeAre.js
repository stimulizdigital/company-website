import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image" data-tilt>
                <img
                  src="/images/about/about-2.png"
                  alt="image"
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
               <span>WHO WE ARE</span>
              <h3>
              Your <b>One-Stop</b> IT & Tech Powerhouse
              </h3>
              <p>
              Transcending boundaries with state-of-the-art technology solutions, we're the architects of tomorrow's digital landscape. Embark on a voyage to innovation with our expertly crafted tech prowess.
              </p>
              <p>
              In the heart of Canada's innovation landscape, our Saskatchewan-based company leads the charge in fortifying the digital realm. Specializing in cybersecurity and blockchain technology, we are committed to building unbreakable digital infrastructures. Our mission is to empower businesses and individuals with robust security protocols and transformative blockchain solutions, ensuring trust and integrity are the bedrock of the digital age.
              </p>
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
