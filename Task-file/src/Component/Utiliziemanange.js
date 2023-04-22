import React from "react";
import one from "../Images/utizeone.png";
import two from "../Images/utiztwo.png";
import three from "../Images/utizetwo.png";
import four from "../Images/utizfour.png";
const Utiliziemanange = () => {
  return (
    <div>
      <div className="contact-banner">
        <h3 className="top-contact-header"> Utilization Management</h3>
      </div>

      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6">
            <div>
              <img src={one} alt="pitture" width="100%" />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 about-colum">
            <div>
              <h4 className="contnet-change-title">Authorization Auto Approval</h4>
              <ul>
                <li className="list-style">
                  Built application for auto approval of authorization based on
                  various UM guidelines
                </li>
                <li className="list-style">
                  (including LCDs, NCDs, various health plan medical necessity
                  guidelines) Expertise in fax form and web portal development
                  to facilitate auto approvals
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        {/* .....second row..... */}
        <div className="row mt-5">
          <div className="col-lg-5 about-colum">
            <div>
              <h4 className="contnet-change-title">Authorizations Workflow System</h4>
              <ul>
                <li className="list-style">
                  Developed workflow systems for authorization processing
                </li>
                <li className="list-style">
                  Capable of handling large volume(5,000 per day) of
                  authorization reviews manually or automatically along with
                  document management
                </li>
                <li className="list-style">
                  Flexibility to define and alter workflow and validation rules
                  based on company or line of business or service type or other
                  factors
                </li>
                <li className="list-style">
                  Allows for easy reporting of all events (auto captured)
                  related to authorization processing and ensuring timeliness
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <div>
              <img src={two} alt="pitture" width="100%" />
            </div>
          </div>
        </div>
        {/* ....third row.... */}
        <div className="row mt-5">
          <div className="col-lg-6">
            <div>
              <img src={three} alt="pitture" width="100%" />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 about-colum">
            <div>
              <h4 className="contnet-change-title">Super Authorizations</h4>
              <ul>
                <li className="list-style">
                  Inpatient, outpatient and ASC claims bundling before or after
                  claim loading
                </li>

                <li className="list-style">
                  Grouping and Pricing(APC, DRG & ASC): Interfaced with 3M,
                  Clinical Coding Expert and MicroDyn EncoderPlus
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ......fourth row.... */}
        <div className="row mt-5">
          <div className="col-lg-5 about-colum">
            <div>
              <h4 className="contnet-change-title">Post Decision Automation</h4>
              <p className="list-colour">
                Adept in handling peer to peers, reconsiderations, appeals and
                any other post decision activity from a systems, compliance and
                process point of view
              </p>
            </div>
          </div>

          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <div>
              <img src={four} alt="pitture" width="100%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utiliziemanange;
