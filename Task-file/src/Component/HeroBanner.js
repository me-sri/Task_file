import React, { Component } from "react";
import Slider from "react-slick";

import banner from "../Images/Banner.png";

export default class HeroBanner extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div  className="container">
     
        <Slider {...settings}  >
          <div>
         <div >
         <div className="row ">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 about-colum">
            <div>
              <h1 className="banner-title">
                {" "}
                Leverage on our IT 
                expertise to solve your  business problems
              </h1>
              <h2 className="small-header">
                {" "}
                Leverage on our IT expertise to solve your business problems
              </h2>
              <p className="mt-3 banner-phara">
                We create value and build confidence!
              </p>
              <button className="banner-button">Our services</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img
                src={banner}
                alt="banner"
                width="100%"
                className="small-device"
              />
            </div>
          </div>
        </div>
         </div>
          </div>
          <div >
         <div className="row ">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 about-colum">
            <div>
              <h1 className="banner-title">
                {" "}
                Leverage on our IT 
                expertise to solve your  business problems
              </h1>
              <h2 className="small-header">
                {" "}
                Leverage on our IT expertise to solve your business problems
              </h2>
              <p className="mt-3 banner-phara">
                We create value and build confidence!
              </p>
              <button className="banner-button">Our services</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img
                src={banner}
                alt="banner"
                width="100%"
                className="small-device"
              />
            </div>
          </div>
        </div>
         </div>
          <div>
          <div >
         <div className="row ">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 about-colum">
            <div>
              <h1 className="banner-title">
                {" "}
                Leverage on our IT 
                expertise to solve your  business problems
              </h1>
              <h2 className="small-header">
                {" "}
                Leverage on our IT expertise to solve your business problems
              </h2>
              <p className="mt-3 banner-phara">
                We create value and build confidence!
              </p>
              <button className="banner-button">Our services</button>
            </div>
          </div>
          <div className="col-lg-6">
            <div>
              <img
                src={banner}
                alt="banner"
                width="100%"
                className="small-device"
              />
            </div>
          </div>
        </div>
         </div>
          </div>
          
         
        </Slider>
      </div>
    );
  }
}