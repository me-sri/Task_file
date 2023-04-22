import React from "react";
//  import images 
import men from "../Images/user-svgrepo-com(1).png";
import one from "../Images/Quality.png";
import two from "../Images/Customize 1.png";
import three from "../Images/Support 1.png";
import TestimonialSlider from "./TestimonialSlider";

const Clients = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="our-core">
          <h2 className="core-title">Our Core Values</h2>
          <span
            className="pt-2 core-text
    "
          >
            We provide customized, unique and effective IT services as per
            clients <br></br>
            requirements & constraints{" "}
          </span>
        </div>

        <div className="core-top">
          <div className="row">
            <div className="col-lg-4">
              <div className="core-small">
                <img src={one} alt="pitture" />
                <h5 className="mt-3 core-pharaa">Quality</h5>
                <p className="core-phara">
                  There is no compromise in the <br />
                  quality of service we provide at Key
                  <br /> Software, Inc.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="core-small">
                <img src={two} alt="pitture" />
                <h5 className="mt-3 core-pharaa">Customization</h5>
                <p className="core-phara">
                  Our solutions are highly varied and <br></br>customized for
                  each client & their <br></br> needs
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="core-small">
                <img src={three} alt="pitture" />
                <h5 className="mt-3 core-pharaa">Support</h5>
                <p className="core-phara">
                  We take full responsibility, provide <br /> full support and
                  ensure that any
                  <br /> issues are resolved
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="  client mt-5">
      <h2 className="what-say text-center">What our clients say about us?</h2>
      <div className="pt-5 pb-5">
      <TestimonialSlider/>
      </div>
      </div>
    </>
  );
};

export default Clients;
