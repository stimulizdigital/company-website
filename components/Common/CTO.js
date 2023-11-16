import React from "react";

const CTO = () => {
  return (
    <>
      <div className="overview-area pt-100 pb-75">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Call Us</h3>
                <span>
                  <a href="tel:+1 (639) 709-9000">+1 (639) 709-9000</a>
                </span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Email Us</h3>
                <span>
                  <a href="mailto:admin@stimuliz.ca">admin@stimuliz.ca</a>
                </span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Tech Support</h3>
                <span>
                  <a href="tel:16397099000">+1 (639) 709-9000 </a>
                </span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="overview-card">
                <h3>Visit Us</h3>
                <span> 10 Research Dr, Regina, SK S4S 7J7  </span>

                <div className="overview-shape">
                  <img src="/images/overview/overview-shape.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTO;
