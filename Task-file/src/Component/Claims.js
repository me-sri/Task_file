import React from "react";
//  import images...
import claims from "../Images/claims.png";
import icons from "../Images/arrow_circle.png";
import { Link } from 'react-router-dom';
const Claims = () => {
  return (
    <div>
      <div className="container">
        <div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div  
              >
              <img src={claims} alt="img" width="100%" /> </div>
              <div></div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 about-colum">
              <div>
                <h3 className="servie-title">Claims Automation</h3>
                <p className="servie-text">
                  Experienced in auto-adjudication of claims, manual and
                  automated auditing, bundling, pricing and grouping.
                </p>
                
                <Link to="/Claimscare" className="nav-link"> 
                <a className="service-learn">Learn More</a>{" "}
                <img src={icons} alt="icon" /> </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claims;
