import React from "react";

// import images
import one from "../Images/claimOne.png";
import two from "../Images/claimtwo.png";
import three from "../Images/claimthree.png";
import four from "../Images/claimfour.png";
import five from "../Images/claimfive.png";

const Claimscare = () => {
  return (
    <div>
      <div className="contact-banner">
        <h3 className="top-contact-header">Claims Adjudication & Automation</h3>
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
              <h4 className="health-header">Auto Adjudication Scripts</h4>
              <ul>
                <li className="list-style">
                  Designed and developed auto adjudication scripts for applying
                  business rules in either batch or real-time mode
                </li>
                <li className="list-style">
                  Achieved 80% auto adjudication at multiple clients
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
              <h4 className="health-header">Audit and Compliance</h4>
              <ul>
                <li className="list-style">
                  Designed and developed claims payment integrity checks
                  including duplicate checks (16-pass algorithm to detect
                  “corrections” vs. “duplicates” vs. “re-submissions”),
                  over-payment audits and other compliance audits
                </li>
                <li className="list-style">
                  Developed automated jobs to flag claims for manual audit and
                  re-audit for ensuring payment or processing compliance.
                  Development of audit applications and processes
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
              <h4 className="health-header">Bundling, Grouping and Pricing</h4>
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
              <h4 className="health-header">Document Management</h4>
              <ul>
                <li className="list-style">
                  Automated medical records requests and issuing automated
                  approval or denial letters
                </li>

                <li className="list-style">
                  Post Decision activity automation including EFT and EOB
                  generation
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <div>
              <img src={four} alt="pitture" width="100%" />
            </div>
          </div>
        </div>

        {/* ....fifth row... */}
        <div className="row mt-5">
          <div className="col-lg-6">
            <div>
              <img src={five} alt="pitture" width="100%" />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 about-colum">
            <div>
              <h4 className="health-header">Provider Dispute Resolution</h4>
              <ul>
                <li className="list-style">
                  Experienced in handling of appeals, re-pricing and payment
                  adjustment along with compliant communication within
                  regulatory turnaround times
                </li>
                <li className="list-style">
                  Adept in handling peer-to-peers, reconsideration, and any
                  other post decision activity from a systems, compliance and
                  process point of view
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claimscare;
