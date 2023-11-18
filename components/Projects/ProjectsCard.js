import React from "react";
import Link from "next/link";

const ProjectsCard = () => {
  return <>
    <div className="projects-area pt-100 pb-75">
      <div className="container">
        <div className="section-title">
          <span>PROJECTS</span>
          <h2>
            Our Latest <b>Incredible</b> Client&apos;s Projects
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="single-projects-item"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="projects-image">
                <Link href="/projects/projects-details" legacyBehavior>

                  <img
                    src="/images/projects-two/projects-1.jpg"
                    alt="image"
                  />

                </Link>
              </div>
              <div className="projects-content">
                <Link href="#" className="category">
                  Animation
                </Link>
                <h3>
                  <Link href="/projects/projects-details">
                    3D Animation
                  </Link>
                </h3>
                <Link href="/projects/projects-details" className="projects-btn">
                  View More
                </Link>
              </div>
            </div>

            <div
              className="single-projects-item"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="projects-image">
                <Link href="/projects/projects-details" legacyBehavior>

                  <img
                    src="/images/projects-two/projects-2.jpg"
                    alt="image"
                  />

                </Link>
              </div>
              <div className="projects-content">
                <Link href="#" className="category">
                  Software
                </Link>
                <h3>
                  <Link href="/projects/projects-details">
                    Online Banking Software
                  </Link>
                </h3>
                <Link href="/projects/projects-details" className="projects-btn">
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-projects-item"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="projects-image">
                <Link href="/projects/projects-details" legacyBehavior>

                  <img
                    src="/images/projects-two/projects-3.jpg"
                    alt="image"
                  />

                </Link>
              </div>
              <div className="projects-content">
                <Link href="#" className="category">
                  Web Design
                </Link>
                <h3>
                  <Link href="/projects/projects-details">
                    Cashier Software
                  </Link>
                </h3>
                <Link href="/projects/projects-details" className="projects-btn">
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="single-projects-item"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="projects-image">
                <Link href="/projects/projects-details" legacyBehavior>

                  <img
                    src="/images/projects-two/projects-4.jpg"
                    alt="image"
                  />

                </Link>
              </div>
              <div className="projects-content">
                <Link href="#" className="category">
                  Mobile App
                </Link>
                <h3>
                  <Link href="/projects/projects-details">
                    Messaging App
                  </Link>
                </h3>
                <Link href="/projects/projects-details" className="projects-btn">
                  View More
                </Link>
              </div>
            </div>

            <div
              className="single-projects-item"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="projects-image">
                <Link href="/projects/projects-details" legacyBehavior>

                  <img
                    src="/images/projects-two/projects-5.jpg"
                    alt="image"
                  />

                </Link>
              </div>
              <div className="projects-content">
                <Link href="#" className="category">
                  Development
                </Link>
                <h3>
                  <Link href="/projects/projects-details">
                    Analytics Software
                  </Link>
                </h3>
                <Link href="/projects/projects-details" className="projects-btn">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="projects-bg-shape-1">
        <img src="/images/projects/projects-bg-shape.png" alt="image" />
      </div>
    </div>
  </>;
};

export default ProjectsCard;
