import React from "react";
import Health from "../Images/Utilization.png";
import icons from "../Images/arrow_circle.png";
import { Link } from 'react-router-dom';
const Utlize = () => {
  return (
    <div>
      <div>
        <div className="container">
          <div>
            <div className="row mt-5">
             

              <div className="col-lg-6 about-colum">
                <div>
                  <h3 className='servie-title'>Utilization Management</h3>
                  <p className='servie-text'>
                  Adept in UM workflow customization, auto-approval based on
                    LCD’s & other guidelines. Innovative super-auth solutions
                    for claims to auth-matching.
                  </p>
                  <Link to="/Utiliziemanange" className="nav-link"> 
                  <span className='service-learn'>Learn More</span> <img src={icons} alt="arrow" /></Link>
                </div>
              </div>
             
              <div className="col-lg-6">
               <div className='images-small-top'>
               <img src={Health} alt="pitture" width="100%"/>
               </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utlize;
