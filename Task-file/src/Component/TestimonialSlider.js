import React, { Component } from "react";
// import images
import one from "../Images/review-one.webp";
import two from "../Images/reviwe-two.webp";
import three from "../Images/review.three.webp";
// import slider file
import Slider from "react-slick";

export default class TestimonialSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 790,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
          },
        },

        {
          breakpoint: 990,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container">
        {" "}
        <Slider {...settings}>
          <div>
            <div className="card h-100 w-100">
              <div className="card-text">
                "I have been frequently working with the Key Software, Inc.
                since 2018. I greatly
              </div>
              <div className="men">
                <div className="row">
                  <div className="col-lg-3">
                    <div>
                      <img src={one} alt="wommen" className="test-logo" />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div>
                      <h4 className="fs-2">Amparo Briceño</h4>
                      <span className="fs-4">Business System Analyst, </span>

                      <span className="fs-4">Change Healthcare</span>
                      <br />
                      <span className="pt-2">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card h-100 w-100">
              <div className="card-text">
                "I have been frequently working with the Key Software, Inc.
                since 2018. I greatly
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="men">
                    <div>
                      <img src={two} alt="wommen" className="test-logo" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div>
                    <h4 className="fs-2">Amparo Briceño</h4>
                    <span className="fs-4">Business System Analyst, </span>

                    <span className="fs-4">Change Healthcare</span>
                    <br />
                    <span className="pt-2">⭐⭐⭐⭐⭐</span>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
          <div>
            <div className="card h-100 w-100">
              <div className="card-text">
                "I have been frequently working with the Key Software, Inc.
                since 2018. I greatly
              </div>
              <div className="men">
                <div className="row">
                  <div className="col-lg-3">
                    <div>
                      <img src={three} alt="wommen" className="test-logo" />
                    </div>
                  </div>

                  <div className="col-lg-9">
                    <div>
                      <h4 className="fs-2">Amparo Briceño</h4>
                      <span className="fs-4">Business System Analyst, </span>

                      <span className="fs-4">Change Healthcare</span>
                      <br />
                      <span className="pt-2">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
          <div>
            <div className="card h-100 w-100">
              <div className="card-text">
                "I have been frequently working with the Key Software, Inc.
                since 2018. I greatly
              </div>
              <div className="men">
                <div className="row">
                  <div className="col-lg-3">
                    <div>
                      <img src={one} alt="wommen" className="test-logo" />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div>
                      <h4 className="fs-2">Amparo Briceño</h4>
                      <span className="fs-4">Business System Analyst, </span>

                      <span className="fs-4">Change Healthcare</span>
                      <br />
                      <span className="pt-2">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card h-100 w-100">
              <div className="card-text">
                "I have been frequently working with the Key Software, Inc.
                since 2018. I greatly
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <div className="men">
                    <div>
                      <img src={two} alt="wommen" className="test-logo" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div>
                    <h4 className="fs-2">Amparo Briceño</h4>
                    <span className="fs-4">Business System Analyst, </span>

                    <span className="fs-4">Change Healthcare</span>
                    <br />
                    <span className="pt-2">⭐⭐⭐⭐⭐</span>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
          <div>
            <div className="card h-100 w-100">
              <div className="card-text">
                "I have been frequently working with the Key Software, Inc.
                since 2018. I greatly
              </div>
              <div className="men">
                <div className="row">
                  <div className="col-lg-3">
                    <div>
                      <img src={three} alt="wommen" className="test-logo" />
                    </div>
                  </div>

                  <div className="col-lg-9">
                    <div>
                      <h4 className="fs-2">Amparo Briceño</h4>
                      <span className="fs-4">Business System Analyst, </span>

                      <span className="fs-4">Change Healthcare</span>
                      <br />
                      <span className="pt-2">⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
