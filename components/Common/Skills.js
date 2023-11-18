import React from "react";
import Link from "next/link";

const Skills = () => {
  return <>
    <div className="skill-area ptb-100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="skill-content">
              <span>SKILLSET</span>
              <h3>We possess a suite of high-quality skills.</h3>
            </div>

            <div
              className="skill-bar"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <h5 className="progress-title">
                Software Development 
                <span className="float-end">100%</span>
              </h5>
              <div className="progress border-3e019a">
                <div
                  className="progress-bar bg-3e019a"
                  role="progressbar"
                  style={{ width: '100%' }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
           
            <div
              className="skill-bar"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <h5 className="progress-title">
                App Development
                <span className="float-end">100%</span>
              </h5>
              <div className="progress border-D5158F">
                <div
                  className="progress-bar bg-D5158F"
                  role="progressbar"
                  style={{ width: '100%' }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          
            <div
              className="skill-bar"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <h5 className="progress-title">
                Artificial Intelligence
                <span className="float-end">100%</span>
              </h5>
              <div className="progress border-feb302">
                <div
                  className="progress-bar bg-feb302"
                  role="progressbar"
                  style={{ width: '100%' }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          
            <div
              className="skill-bar"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="700"
              data-aos-once="true"
            >
              <h5 className="progress-title">
                Cyber Security
                <span className="float-end">100%</span>
              </h5>
              <div className="progress border-A66BFF">
                <div
                  className="progress-bar bg-A66BFF"
                  role="progressbar"
                  style={{ width: '100%' }}
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>

            <div className="skill-bar-btn" data-aos="fade-up" data-aos-delay="90" data-aos-duration="900" data-aos-once="true">
              <Link href="/about" className="default-btn">
                Explore More
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div
              className="skill-image"
              data-aos="fade-left"
              data-aos-delay="80"
              data-aos-duration="800"
              data-aos-once="true"
            >
              <img src="/images/skill/skill-1.png" alt="image" />

              <div className="skill-shape-1">
                <img src="/images/skill/skill-shape-1.png" alt="image" />
              </div>
              <div className="skill-shape-2">
                <img src="/images/skill/skill-shape-2.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="skill-bg-shape">
        <img src="/images/skill/skill-bg-shape.png" alt="image" />
      </div>
    </div>
  </>;
};

export default Skills;
