import "./Services.css";

import { ServicesData } from "../../data/ServicesData";

const Services = () => {


  return (
    <>
      <div className="services" id="services">
        <div className="service-container">
          <div class="title-wrapper">
            <div>
              <h2 class="h2 section-title">
                Services
              </h2>

              <p class="section-text">
                Empowering you with top-notch solutions that drive success.
              </p>
            </div>
          </div>

          <div className="service-row">
            {ServicesData.map((items) => {
              return (
                <>
                  <div
                    className=" my-service"
                    data-aos="zoom-in-up"
                    data-aos-duration="1500"
                  >
                    <div className="ser-back">
                      <img src={items.image} alt="" />
                    </div>
                    <h4 className="web-title">{items.title}</h4>
                    <p className="service-info">{items.description}</p>
                    {/* <h6 className="learn-more">{service.learn_more}</h6> */}
                    <div class="shadow-icon">
                      <i class="hfg">Web Dev</i>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
