import React from "react";

// import images......
import one from "../Images/Logo1.png";
import two from "../Images/Logo2.png";
import three from "../Images/Logo3.png";
import four from "../Images/Logo4.png";
import five from "../Images/Logo5.png";
import six from "../Images/Logo7.png";
import seven from "../Images/Logo8.png";
import eight from "../Images/Logo9.png";
import company from "../Images/company.png";
import mOne from "../Images/Expert 1.png";
import MTwo from "../Images/Projects 1.png";
import mThree from "../Images/Clients 1.png";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="logo-top">
          <p className="trusted text-center">Trusted by businesses</p>
          {/* ......logo..... */}

          <section className="mt-5 lg-logo">
            <div className="Logo-images">
              <img src={one} alt="logo" />
              <img src={two} alt="logo" />
              <img src={three} alt="logo" />
              <img src={four} alt="logo" />
              <img src={five} alt="logo" />
            </div>
            <div className="row pt-5">
              <div className="col-lg-3"></div>
              <div className="col-lg-2">
                /* <img src={six} alt="logo" />
              </div>
              <div className="col-lg-2">
                <img src={seven} alt="logo" />
              </div>
              <div className="col-lg-2 ">
                <img src={eight} className="eight-logo" alt="logo" />
              </div>
            </div>
          </section>

          <section className="container small-device-logo">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-lg-2">
                <img src={one} alt="logo" className="small-img" />
              </div>

              <div className="col-lg-3 col-md-3 col-lg-2">
                {" "}
                <img src={two} alt="logo" className="small-img" />
              </div>
              <div className="col-lg-3 col-md-3 col-lg-2">
                <img src={three} alt="logo" className="small-img" />
              </div>
              <div className="col-lg-3 col-md-3 col-lg-2">
                <img src={four} alt="logo" className="small-img" />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-3 col-md-3">
                {" "}
                <img src={five} alt="logo" className="small-img" />
              </div>
              <div className="col-lg-3 col-md-3">
                <img src={six} alt="logo" className="small-img" />
              </div>
              <div className="col-lg-3 col-md-3">
                {" "}
                <img src={seven} alt="logo" className="small-img" />
              </div>
              <div className="col-lg-3 col-md-3 ">
                {" "}
                <img src={eight} className="eight-logo small-img" alt="logo" />
              </div>
            </div>
          </section>

          <div className="row pt-5">
            <div className="col-lg-6">
              <img src={company} alt="company" width="100%" />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 company-title">
              <div className="">
                <h2 className="company-head">Company Profile</h2>
                <p className="title-one">
                  For over three decades, Key Software, Inc. has been supplying
                  innovative and affordable solutions to help companies of all
                  sizes stay on top of the constantly-changing world of managed
                  healthcare administration.
                </p>
                <p className="title-two">
                  With a combination of exceptional service and support, and by
                  providing customized applications to help increase efficiency
                  and reduce costs, Key Software, Inc. has become a proven
                  industry leader in the delivery of healthcare IT solutions.
                </p>
                <button className=" About-button"> About Us</button>
              </div>
            </div>
          </div>
        </div>

        <div className="metric-contnet"></div>
      </div>

      <div className="container-fluid p-0">
        <div className="metric pt-5">
          <div className="about-bottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div>
                    <img src={mOne} alt="mone" className="client-images" />
                    <p className="num">34</p>
                    <h4 className="requirement">Years in Business</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <img src={MTwo} alt="mone" className="client-images" />
                    <p className="num">1,723</p>
                    <h4 className="requirement">Successful Projects</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div>
                    <img src={mThree} alt="mone" className="client-images" />
                    <p className="num">32+</p>
                    <h4 className="requirement">Satisfied Clients</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
