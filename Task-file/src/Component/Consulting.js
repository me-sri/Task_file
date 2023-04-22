import React from "react";

// import images 
import Health from "../Images/Consulting.png";
import icons from "../Images/arrow_circle.png";

import { Link } from "react-router-dom/";
const Consulting = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div>
            <div className="row mt-5">
              <div className="col-lg-6">
              <div className='images-small-top'>
              <img src={Health} alt="pitture" width="100%" />
              </div>
                <div></div>
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-5 about-colum">
                <div>
                  <h3 className="servie-title">Healthcare Consulting</h3>
                  <p className="servie-text">
                    Assist our clients with their business process customization
                    needs, data warehousing, reconciliation and reporting.
                  </p>
                  <Link to="/Consultingcare" className="nav-link"> 
                  <a className="service-learn">Learn More</a>{" "}
                  <img src={icons} alt="icon" /> </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
