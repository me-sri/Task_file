import React from "react";
import { Link } from 'react-router-dom';
import Health from "../Images/Healthcare.png";
import icons from "../Images/arrow_circle.png";

const HealthCare = () => {
  return (
    <div className="container">
      <div>
        <div className="row mt-5">
          <div className="col-lg-6 about-colum">
            <div>
              <h3 className="servie-title">Healthcare Data Management</h3>
              <p className="servie-text">
                Expertise in in-loading, exporting & processing eligibility,
                provider, claims or authorizations data.
              </p>
             

              <Link to="/Heathcare" className="nav-link">  <a className="service-learn">Learn More</a>{" "}
              <img src={icons} alt="icon" /> </Link>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="images-small-top">
              <img src={Health} alt="pitture" width="100%" />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCare;
